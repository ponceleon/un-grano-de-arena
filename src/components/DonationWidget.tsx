import { useState } from 'react';
import type { Language } from '../i18n';
import { getTranslations } from '../i18n';

interface DonationWidgetProps {
  lang?: Language;
}

const PRESET_AMOUNTS = [20, 40, 60, 80, 100];

function calculateFee(amount: number): number {
  return amount * 0.029 + 0.30;
}

export default function DonationWidget({
  lang = 'es',
}: DonationWidgetProps) {
  const t = getTranslations(lang);
  const [paymentMethod, setPaymentMethod] = useState<'paypal' | 'zelle'>('paypal');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [showCustom, setShowCustom] = useState(false);
  const [coverFee, setCoverFee] = useState(false);

  const getDisplayAmount = (): number => {
    if (showCustom && customAmount) {
      return parseFloat(customAmount) || 0;
    }
    return selectedAmount || 0;
  };

  const getTotalAmount = (): number => {
    const base = getDisplayAmount();
    if (paymentMethod === 'paypal' && coverFee) {
      return base + calculateFee(base);
    }
    return base;
  };

  const getPaypalUrl = (): string => {
    const amount = Math.round(getTotalAmount() * 100);
    return `https://www.paypal.com/paypalme/ungrano/${amount}`;
  };

  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount);
    setShowCustom(false);
    setCustomAmount('');
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (/^\d*\.?\d{0,2}$/.test(val)) {
      setCustomAmount(val);
    }
  };

  const displayAmount = getDisplayAmount();
  const totalAmount = getTotalAmount();

  return (
    <div class="w-full max-w-lg mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
      <div class="p-6 md:p-8">
        {/* Payment Method Selector */}
        <div class="mb-6">
          <p class="text-sm font-semibold text-brown-600 mb-3">{t.widget.selectMethod}</p>
          <div class="grid grid-cols-2 gap-3">
            <button
              onClick={() => setPaymentMethod('paypal')}
              class={`p-4 rounded-xl border-2 text-center font-semibold transition-all duration-200 ${
                paymentMethod === 'paypal'
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 bg-gray-50 text-gray-500 hover:border-gray-300 hover:bg-gray-100'
              }`}
            >
              <span class="text-lg">{t.widget.paypal}</span>
              <p class="text-xs font-normal mt-1 opacity-70">{t.widget.paypalDescription}</p>
            </button>
            <button
              onClick={() => setPaymentMethod('zelle')}
              class={`p-4 rounded-xl border-2 text-center font-semibold transition-all duration-200 ${
                paymentMethod === 'zelle'
                  ? 'border-accent-500 bg-accent-50 text-accent-700'
                  : 'border-gray-200 bg-gray-50 text-gray-500 hover:border-gray-300 hover:bg-gray-100'
              }`}
            >
              <span class="text-lg">{t.widget.zelle}</span>
              <p class="text-xs font-normal mt-1 opacity-70">{t.widget.zelleDescription}</p>
            </button>
          </div>
        </div>

        {/* PayPal: Amount Selection */}
        {paymentMethod === 'paypal' && (
          <>
            <div class="mb-6">
              <p class="text-sm font-semibold text-brown-600 mb-3">{t.widget.amount}</p>
              <div class="grid grid-cols-3 md:grid-cols-5 gap-2">
                {PRESET_AMOUNTS.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleAmountClick(amount)}
                    class={`py-3 px-2 rounded-xl border-2 font-bold text-lg transition-all duration-200 ${
                      !showCustom && selectedAmount === amount
                        ? 'border-brown-500 bg-brown-500 text-white'
                        : 'border-gray-200 text-gray-600 hover:border-brown-300 hover:bg-brown-50'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              <button
                onClick={() => {
                  setShowCustom(!showCustom);
                  if (!showCustom) setSelectedAmount(null);
                }}
                class={`mt-2 w-full py-3 px-4 rounded-xl border-2 font-semibold transition-all duration-200 ${
                  showCustom
                    ? 'border-brown-500 bg-brown-500 text-white'
                    : 'border-gray-200 text-gray-600 hover:border-brown-300 hover:bg-brown-50'
                }`}
              >
                {t.widget.other}
              </button>
              {showCustom && (
                <div class="mt-3">
                  <div class="relative">
                    <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-lg">$</span>
                    <input
                      type="text"
                      value={customAmount}
                      onChange={handleCustomChange}
                      placeholder="0.00"
                      class="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-xl text-lg font-bold text-brown-600 focus:border-primary-500 focus:outline-none"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Fee Covering */}
            <div class="mb-6">
              <label class="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={coverFee}
                  onChange={(e) => setCoverFee(e.target.checked)}
                  class="mt-1 w-4 h-4 rounded border-gray-300 text-primary-500 focus:ring-primary-400"
                />
                <span class="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                  {t.widget.feeCovering}
                </span>
              </label>
            </div>

            {/* Donate Button */}
            <a
              href={getPaypalUrl()}
              target="_blank"
              rel="noopener noreferrer"
              class={`block w-full text-center py-4 px-6 rounded-xl font-bold text-xl transition-all duration-300 ${
                displayAmount > 0
                  ? 'bg-red-500 hover:bg-red-600 text-white hover:shadow-lg hover:shadow-red-500/30 active:scale-[0.98]'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {t.widget.donateButton} ${totalAmount.toFixed(2)}
            </a>
          </>
        )}

        {/* Zelle: QR Display */}
        {paymentMethod === 'zelle' && (
          <div class="text-center">
            <div class="bg-white rounded-xl p-4 mb-4 inline-block border-2 border-dashed border-gray-200">
              <img
                src="/images/qr-zelle.jpg"
                alt="Zelle QR Code"
                class="w-48 h-48 mx-auto object-contain"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    const placeholder = document.createElement('div');
                    placeholder.className = 'w-48 h-48 mx-auto bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-sm font-medium';
                    placeholder.textContent = 'QR Code';
                    parent.appendChild(placeholder);
                  }
                }}
              />
            </div>
            <p class="text-sm text-gray-600 whitespace-pre-line text-left bg-gray-50 rounded-xl p-4">
              {t.widget.zelleInstructions}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
