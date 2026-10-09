import React, { useState } from 'react';
import { Calculator, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';

export default function RoiCalculator({ onOpenVisitModal }) {
  const [plotSize, setPlotSize] = useState(200); // Sq Yards
  const [ratePerSqYd, setRatePerSqYd] = useState(14500); // INR
  const [downPaymentPercent, setDownPaymentPercent] = useState(25); // 25%
  const [loanTenureYears, setLoanTenureYears] = useState(10); // 10 years
  const interestRate = 8.65; // % per annum

  // Calculations
  const totalCost = plotSize * ratePerSqYd;
  const downPayment = Math.round(totalCost * (downPaymentPercent / 100));
  const loanAmount = totalCost - downPayment;

  // Monthly EMI Calculation
  const monthlyInterest = (interestRate / 12) / 100;
  const totalMonths = loanTenureYears * 12;
  const emi = loanAmount > 0 
    ? Math.round((loanAmount * monthlyInterest * Math.pow(1 + monthlyInterest, totalMonths)) / (Math.pow(1 + monthlyInterest, totalMonths) - 1))
    : 0;

  // Projected 5-Year Land Appreciation
  const projectedValue5Yrs = Math.round(totalCost * Math.pow(1 + 0.18, 5));
  const projectedAppreciationGain = projectedValue5Yrs - totalCost;

  const cents = (plotSize / 48.4).toFixed(2);

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="calculator" className="py-12 sm:py-16 bg-[#FFFFFF] border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-400/40 bg-sand-100 text-[10px] font-bold tracking-[0.25em] text-gold-800 uppercase mb-2">
            <Calculator className="w-3.5 h-3.5 text-gold-600" />
            FINANCIAL TRANSPARENCY
          </div>
          <h2 className="font-garamond text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 tracking-tight">
            SMART INVESTMENT &amp; <span className="text-gold-600 font-semibold italic">EMI CALCULATOR</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1.5 font-normal">
            Plan your investment with precision. Simulate plot sizes, monthly bank EMIs, and projected capital appreciation returns.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Left Controls Sliders */}
          <div className="lg:col-span-7 bg-[#FBF9F5] p-5 sm:p-7 rounded-2xl border border-sand-300 shadow-sm flex flex-col justify-between space-y-5">
            
            {/* Control 1: Plot Size */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-bold text-navy-900 uppercase tracking-wider">
                  Plot Area (Extent)
                </label>
                <div className="text-right">
                  <span className="font-sans text-sm font-bold text-navy-900">{plotSize} Sq. Yards</span>
                  <span className="text-xs text-slate-500 ml-1">({cents} Cents)</span>
                </div>
              </div>
              <input
                type="range"
                min="150"
                max="600"
                step="10"
                value={plotSize}
                onChange={(e) => setPlotSize(Number(e.target.value))}
                className="w-full h-2 bg-sand-300 rounded-lg appearance-none cursor-pointer accent-[#0C1829]"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-0.5 font-mono">
                <span>150 Sq. Yds</span>
                <span>300 Sq. Yds (Villa)</span>
                <span>600 Sq. Yds (Commercial)</span>
              </div>
            </div>

            {/* Control 2: Rate per Sq Yard */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-bold text-navy-900 uppercase tracking-wider">
                  Estimated Rate per Sq. Yard
                </label>
                <span className="font-sans text-sm font-bold text-gold-700">
                  {formatCurrency(ratePerSqYd)}
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="25000"
                step="500"
                value={ratePerSqYd}
                onChange={(e) => setRatePerSqYd(Number(e.target.value))}
                className="w-full h-2 bg-sand-300 rounded-lg appearance-none cursor-pointer accent-[#0C1829]"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-0.5 font-mono">
                <span>₹10,000 (Highway)</span>
                <span>₹14,500 (Sarpavaram)</span>
                <span>₹25,000 (City Core)</span>
              </div>
            </div>

            {/* Control 3: Down Payment */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-bold text-navy-900 uppercase tracking-wider">
                  Down Payment ({downPaymentPercent}%)
                </label>
                <span className="font-sans text-xs font-bold text-navy-900">
                  {formatCurrency(downPayment)}
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="60"
                step="5"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full h-2 bg-sand-300 rounded-lg appearance-none cursor-pointer accent-[#0C1829]"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-0.5 font-mono">
                <span>20% (Minimum)</span>
                <span>30%</span>
                <span>60% (Lower EMI)</span>
              </div>
            </div>

            {/* Control 4: Loan Tenure */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-bold text-navy-900 uppercase tracking-wider">
                  Bank Loan Tenure
                </label>
                <span className="font-sans text-xs font-bold text-navy-900">
                  {loanTenureYears} Years ({loanTenureYears * 12} Months)
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[3, 5, 10, 15].map((yr) => (
                  <button
                    key={yr}
                    onClick={() => setLoanTenureYears(yr)}
                    className={`py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                      loanTenureYears === yr
                        ? 'border-navy-900 bg-navy-900 text-white font-bold shadow-sm'
                        : 'border-sand-300 bg-white text-slate-700 hover:border-sand-400'
                    }`}
                  >
                    {yr} Yrs
                  </button>
                ))}
              </div>
            </div>

            <div className="text-[11px] text-slate-600 flex items-center gap-1.5 pt-1.5 border-t border-sand-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Loans pre-approved through SBI, HDFC, ICICI &amp; Axis Bank.</span>
            </div>

          </div>

          {/* Right Summary Card */}
          <div className="lg:col-span-5 bg-[#0C1829] text-white p-5 sm:p-7 rounded-2xl shadow-xl flex flex-col justify-between relative overflow-hidden">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-[10px] font-bold tracking-widest text-gold-300 uppercase font-sans">
                  INVESTMENT BREAKDOWN
                </span>
                <span className="text-[10px] text-slate-400">@ 8.65% p.a.</span>
              </div>

              {/* Total Cost Highlight */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="text-[9px] uppercase text-slate-300 tracking-wider">Total Plot Investment</div>
                <div className="font-garamond text-3xl font-bold text-white mt-0.5">
                  {formatCurrency(totalCost)}
                </div>
                <div className="text-[10px] text-slate-300 mt-0.5">
                  Plot: {plotSize} Sq. Yds • Rate: {formatCurrency(ratePerSqYd)}/yd
                </div>
              </div>

              {/* EMI & Loan Breakdown */}
              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-[9px] uppercase text-slate-400">Loan Amount</div>
                  <div className="font-sans text-xs font-bold text-white mt-0.5">
                    {formatCurrency(loanAmount)}
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-500/30">
                  <div className="text-[9px] uppercase text-emerald-300">Est. Monthly EMI</div>
                  <div className="font-sans text-xs font-bold text-emerald-300 mt-0.5">
                    {formatCurrency(emi)} <span className="text-[9px] font-normal text-slate-400">/mo</span>
                  </div>
                </div>
              </div>

              {/* 5-Year Land Value Appreciation Box */}
              <div className="p-3.5 rounded-xl bg-gradient-to-br from-gold-500/20 to-transparent border border-gold-400/30">
                <div className="flex items-center gap-1.5 text-xs font-bold text-gold-300 mb-0.5">
                  <TrendingUp className="w-3.5 h-3.5 text-gold-400" />
                  <span>PROJECTED 5-YEAR WEALTH MULTIPLIER</span>
                </div>
                <div className="font-garamond text-2xl font-bold text-white">
                  {formatCurrency(projectedValue5Yrs)}
                </div>
                <div className="text-[10px] text-emerald-300 font-medium mt-0.5">
                  + {formatCurrency(projectedAppreciationGain)} estimated net capital gain (18% CAGR)
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="mt-5 pt-3 border-t border-white/10 space-y-1.5">
              <button
                onClick={onOpenVisitModal}
                className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-[#F5E6BE] via-[#D4AF37] to-[#C59A3C] hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <span>Lock This Price &amp; Book Site Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center text-[9px] text-slate-400">
                *Projections are indicative based on historical Kakinada smart city real estate growth.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
