import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import '../../styles/LandingV3.css';

const fmtCurrency = (v: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(v);

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

const CalculatorV3EN: React.FC = () => {
  // Defaults as requested: 5,000 / 45% / 12% / €300 / 20%
  const [leads, setLeads] = useState<number>(5000);
  const [reachRate, setReachRate] = useState<number>(45); // % reached by AI
  const [salesRate, setSalesRate] = useState<number>(12); // % of reached that convert
  const [avgDeal, setAvgDeal] = useState<number>(300); // EUR
  const [commissionRate, setCommissionRate] = useState<number>(20); // % for us
  const [monthlyFee, setMonthlyFee] = useState<number>(500); // EUR fixed fee

  const result = useMemo(() => {
    const fee = monthlyFee;
    const reached = Math.round(leads * (reachRate / 100));
    const sales = Math.round(reached * (salesRate / 100));
    const revenue = sales * avgDeal;
    const commission = Math.round(revenue * (commissionRate / 100));
    const client = Math.max(0, revenue - commission - fee);
    const fyxedTotal = commission + fee;
    return { reached, sales, revenue, commission, client, fyxedTotal, fee };
  }, [leads, reachRate, salesRate, avgDeal, commissionRate, monthlyFee]);

  return (
    <section id="calculator" className="v3-calc">
      <div className="v3-container">
        <h2 className="v3-section-title">Example calculator: old leads → revenue</h2>
        <p className="v3-section-sub">See what 24/7 outbound AI can mean: call back old leads, convert some to sales, and view the distribution of commission (Fyxed) and revenue (you).</p>

        <div className="v3-calc-grid">
          <div className="v3-calc-controls">
            <div className="v3-input-group">
              <label>Number of old leads</label>
              <div className="v3-input-row">
                <input type="range" min={0} max={20000} step={100} value={leads}
                  onChange={(e) => setLeads(clamp(parseInt(e.target.value||'0',10),0,20000))} />
                <input type="number" min={0} max={20000} step={100} value={leads}
                  onChange={(e) => setLeads(clamp(parseInt(e.target.value||'0',10),0,20000))} />
              </div>
            </div>

            <div className="v3-input-group">
              <label>Reach rate (AI reaches %)</label>
              <div className="v3-input-row">
                <input type="range" min={0} max={100} step={1} value={reachRate}
                  onChange={(e) => setReachRate(clamp(parseInt(e.target.value||'0',10),0,100))} />
                <input type="number" min={0} max={100} step={1} value={reachRate}
                  onChange={(e) => setReachRate(clamp(parseInt(e.target.value||'0',10),0,100))} />
                <span className="v3-unit">%</span>
              </div>
            </div>

            <div className="v3-input-group">
              <label>Sales from reach (% of reached calls)</label>
              <div className="v3-input-row">
                <input type="range" min={0} max={100} step={1} value={salesRate}
                  onChange={(e) => setSalesRate(clamp(parseInt(e.target.value||'0',10),0,100))} />
                <input type="number" min={0} max={100} step={1} value={salesRate}
                  onChange={(e) => setSalesRate(clamp(parseInt(e.target.value||'0',10),0,100))} />
                <span className="v3-unit">%</span>
              </div>
            </div>

            <div className="v3-input-group">
              <label>Average order value (EUR)</label>
              <div className="v3-input-row">
                <input type="range" min={0} max={5000} step={50} value={avgDeal}
                  onChange={(e) => setAvgDeal(clamp(parseInt(e.target.value||'0',10),0,5000))} />
                <input type="number" min={0} max={5000} step={50} value={avgDeal}
                  onChange={(e) => setAvgDeal(clamp(parseInt(e.target.value||'0',10),0,5000))} />
                <span className="v3-unit">€</span>
              </div>
            </div>

            <div className="v3-input-group">
              <label>Fyxed commission (%)</label>
              <div className="v3-input-row">
                <input type="range" min={0} max={50} step={1} value={commissionRate}
                  onChange={(e) => setCommissionRate(clamp(parseInt(e.target.value||'0',10),0,50))} />
                <input type="number" min={0} max={50} step={1} value={commissionRate}
                  onChange={(e) => setCommissionRate(clamp(parseInt(e.target.value||'0',10),0,50))} />
                <span className="v3-unit">%</span>
              </div>
            </div>

            <div className={`v3-input-group`}>
              <label>Fyxed monthly fee (EUR)</label>
              <div className={`v3-input-row`}>
                <input type="range" min={0} max={5000} step={50} value={monthlyFee}
                  onChange={(e) => setMonthlyFee(clamp(parseInt(e.target.value||'0',10),0,5000))} />
                <input type="number" min={0} max={5000} step={50} value={monthlyFee}
                  onChange={(e) => setMonthlyFee(clamp(parseInt(e.target.value||'0',10),0,5000))} />
                <span className="v3-unit">€</span>
              </div>
            </div>
          </div>

          <div className="v3-calc-results">
            <div className="v3-results-grid">
              <motion.div className="v3-result-card" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span className="v3-result-label">Reached leads</span>
                <span className="v3-result-value">{result.reached.toLocaleString('en-US')}</span>
              </motion.div>
              <motion.div className="v3-result-card" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .05 }}>
                <span className="v3-result-label">Sales (pieces)</span>
                <span className="v3-result-value">{result.sales.toLocaleString('en-US')}</span>
              </motion.div>
              <motion.div className="v3-result-card wide" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .1 }}>
                <span className="v3-result-label">Total revenue</span>
                <span className="v3-result-value">{fmtCurrency(result.revenue)}</span>
              </motion.div>
              <motion.div className="v3-result-card" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .15 }}>
                <span className="v3-result-label">Commission (Fyxed)</span>
                <span className="v3-result-value">{fmtCurrency(result.commission)}</span>
              </motion.div>
              <motion.div className="v3-result-card" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .18 }}>
                <span className="v3-result-label">Monthly fee (Fyxed)</span>
                <span className="v3-result-value">{fmtCurrency(result.fee)}</span>
              </motion.div>
              <motion.div className="v3-result-card" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .2 }}>
                <span className="v3-result-label">Revenue (you)</span>
                <span className="v3-result-value">{fmtCurrency(result.client)}</span>
              </motion.div>
              <motion.div className="v3-result-card" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .22 }}>
                <span className="v3-result-label">Total Fyxed</span>
                <span className="v3-result-value">{fmtCurrency(result.fyxedTotal)}</span>
              </motion.div>
            </div>

            <div className="v3-split-bar" aria-hidden>
              <div className="v3-split fyxed" style={{ width: `${result.revenue ? (Math.min(result.commission, result.revenue) / result.revenue) * 100 : 0}%` }} />
              <div className="v3-split client" style={{ width: `${result.revenue ? Math.max(0, (result.client / result.revenue) * 100) : 0}%` }} />
            </div>

            <div className="v3-split-legend">
              <span><i className="dot fyxed"/> Fyxed</span>
              <span><i className="dot client"/> You</span>
            </div>
            <p className="v3-disclaimer">Note: these are not official prices, only examples. Quotes vary by company.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorV3EN;