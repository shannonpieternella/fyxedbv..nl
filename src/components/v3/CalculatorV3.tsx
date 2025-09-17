import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import '../../styles/LandingV3.css';

const fmtCurrency = (v: number) => new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(v);

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

const CalculatorV3: React.FC = () => {
  // Defaults as requested: 5.000 / 45% / 12% / €300 / 20%
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
        <h2 className="v3-section-title">Voorbeeldcalculator: oude leads → omzet</h2>
        <p className="v3-section-sub">Zie wat 24/7 outbound AI kan betekenen: bel oude leads terug, converteer een deel naar sales en bekijk de verdeling van commissie (Fyxed) en opbrengst (u).</p>

        <div className="v3-calc-grid">
          <div className="v3-calc-controls">
            <div className="v3-input-group">
              <label>Aantal oude leads</label>
              <div className="v3-input-row">
                <input type="range" min={0} max={20000} step={100} value={leads}
                  onChange={(e) => setLeads(clamp(parseInt(e.target.value||'0',10),0,20000))} />
                <input type="number" min={0} max={20000} step={100} value={leads}
                  onChange={(e) => setLeads(clamp(parseInt(e.target.value||'0',10),0,20000))} />
              </div>
            </div>

            <div className="v3-input-group">
              <label>Bereik (AI bereikt %)</label>
              <div className="v3-input-row">
                <input type="range" min={0} max={100} step={1} value={reachRate}
                  onChange={(e) => setReachRate(clamp(parseInt(e.target.value||'0',10),0,100))} />
                <input type="number" min={0} max={100} step={1} value={reachRate}
                  onChange={(e) => setReachRate(clamp(parseInt(e.target.value||'0',10),0,100))} />
                <span className="v3-unit">%</span>
              </div>
            </div>

            <div className="v3-input-group">
              <label>Sales uit bereik (% van bereikte gesprekken)</label>
              <div className="v3-input-row">
                <input type="range" min={0} max={100} step={1} value={salesRate}
                  onChange={(e) => setSalesRate(clamp(parseInt(e.target.value||'0',10),0,100))} />
                <input type="number" min={0} max={100} step={1} value={salesRate}
                  onChange={(e) => setSalesRate(clamp(parseInt(e.target.value||'0',10),0,100))} />
                <span className="v3-unit">%</span>
              </div>
            </div>

            <div className="v3-input-group">
              <label>Gemiddelde orderwaarde (EUR)</label>
              <div className="v3-input-row">
                <input type="range" min={0} max={5000} step={50} value={avgDeal}
                  onChange={(e) => setAvgDeal(clamp(parseInt(e.target.value||'0',10),0,5000))} />
                <input type="number" min={0} max={5000} step={50} value={avgDeal}
                  onChange={(e) => setAvgDeal(clamp(parseInt(e.target.value||'0',10),0,5000))} />
                <span className="v3-unit">€</span>
              </div>
            </div>

            <div className="v3-input-group">
              <label>Commissie Fyxed (%)</label>
              <div className="v3-input-row">
                <input type="range" min={0} max={50} step={1} value={commissionRate}
                  onChange={(e) => setCommissionRate(clamp(parseInt(e.target.value||'0',10),0,50))} />
                <input type="number" min={0} max={50} step={1} value={commissionRate}
                  onChange={(e) => setCommissionRate(clamp(parseInt(e.target.value||'0',10),0,50))} />
                <span className="v3-unit">%</span>
              </div>
            </div>

            <div className={`v3-input-group`}>
              <label>Maandfee Fyxed (EUR)</label>
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
                <span className="v3-result-label">Bereikte leads</span>
                <span className="v3-result-value">{result.reached.toLocaleString('nl-NL')}</span>
              </motion.div>
              <motion.div className="v3-result-card" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .05 }}>
                <span className="v3-result-label">Verkoop (stuks)</span>
                <span className="v3-result-value">{result.sales.toLocaleString('nl-NL')}</span>
              </motion.div>
              <motion.div className="v3-result-card wide" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .1 }}>
                <span className="v3-result-label">Totale omzet</span>
                <span className="v3-result-value">{fmtCurrency(result.revenue)}</span>
              </motion.div>
              <motion.div className="v3-result-card" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .15 }}>
                <span className="v3-result-label">Commissie (Fyxed)</span>
                <span className="v3-result-value">{fmtCurrency(result.commission)}</span>
              </motion.div>
              <motion.div className="v3-result-card" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .18 }}>
                <span className="v3-result-label">Maandfee (Fyxed)</span>
                <span className="v3-result-value">{fmtCurrency(result.fee)}</span>
              </motion.div>
              <motion.div className="v3-result-card" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .2 }}>
                <span className="v3-result-label">Opbrengst (u)</span>
                <span className="v3-result-value">{fmtCurrency(result.client)}</span>
              </motion.div>
              <motion.div className="v3-result-card" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .22 }}>
                <span className="v3-result-label">Totaal Fyxed</span>
                <span className="v3-result-value">{fmtCurrency(result.fyxedTotal)}</span>
              </motion.div>
            </div>

            <div className="v3-split-bar" aria-hidden>
              <div className="v3-split fyxed" style={{ width: `${result.revenue ? (Math.min(result.commission, result.revenue) / result.revenue) * 100 : 0}%` }} />
              <div className="v3-split client" style={{ width: `${result.revenue ? Math.max(0, (result.client / result.revenue) * 100) : 0}%` }} />
            </div>

            <div className="v3-split-legend">
              <span><i className="dot fyxed"/> Fyxed</span>
              <span><i className="dot client"/> U</span>
            </div>
            <p className="v3-disclaimer">Let op: dit zijn geen officiële prijzen, alleen voorbeelden. Offertes verschillen per bedrijf.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorV3;
