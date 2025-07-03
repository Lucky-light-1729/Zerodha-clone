"use client"

import { useState, useEffect } from "react"

export const CalculatorSip = () => {
  const [frequency, setFrequency] = useState("Monthly")
  const [sipAmount, setSipAmount] = useState(5000)
  const [investmentDuration, setInvestmentDuration] = useState(10)
  const [expectedReturn, setExpectedReturn] = useState(12)
  const [monthlyAmount, setMonthlyAmount] = useState(5000)

  const calculateSIP = () => {
    const monthlyRate = expectedReturn / 100 / 12
    const months = investmentDuration * 12
    const amount = sipAmount

    const futureValue = amount * (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate))
    const totalInvestment = amount * months
    const expectedReturns = futureValue - totalInvestment

    return {
      totalInvestment: Math.round(totalInvestment),
      expectedReturns: Math.round(expectedReturns),
      totalValue: Math.round(futureValue),
    }
  }

  const results = calculateSIP()

  useEffect(() => {
    setMonthlyAmount(sipAmount)
  }, [sipAmount])

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const popularCalculators = [
    "Home loan EMI calculator",
    "PPF calculator",
    "EMI calculator",
    "Goal calculator",
    "STP calculator",
    "Lumpsum calculator",
    "MFD calculator",
  ]

  const faqs = [
    {
      question: "How is the amount of investment calculated for SIP?",
      answer:
        "The SIP calculation uses the future value of annuity formula: FV = P × [((1 + r)^n - 1) / r] × (1 + r), where P is the monthly investment, r is the monthly rate of return, and n is the number of months.",
    },
    {
      question: "What does the SIP calculator do?",
      answer:
        "The SIP calculator helps you estimate the future value of your systematic investment plan based on your monthly investment amount, investment duration, and expected rate of return.",
    },
    {
      question: "How do I know what return rate to enter?",
      answer:
        "Historical mutual fund returns can guide you, but past performance doesn't guarantee future results. Consider factors like fund category, market conditions, and your risk tolerance when estimating returns.",
    },
    {
      question: "Does the SIP calculator show the impact of inflation on my returns?",
      answer:
        "The calculator shows nominal returns. To understand real returns, you should consider the impact of inflation separately, typically around 6-7% annually in India.",
    },
  ]

  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#f8fafc",
      padding: "16px",
      fontFamily: "Arial, sans-serif",
    },
    mainWrapper: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 300px",
      gap: "24px",
      "@media (max-width: 768px)": {
        gridTemplateColumns: "1fr",
      },
    },
    card: {
      backgroundColor: "white",
      borderRadius: "8px",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
      marginBottom: "24px",
    },
    cardHeader: {
      padding: "24px 24px 0 24px",
      borderBottom: "1px solid #e2e8f0",
    },
    cardTitle: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#2563eb",
      margin: "0 0 16px 0",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    cardContent: {
      padding: "24px",
    },
    inputGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "32px",
      "@media (max-width: 768px)": {
        gridTemplateColumns: "1fr",
      },
    },
    inputGroup: {
      marginBottom: "24px",
    },
    label: {
      display: "block",
      fontSize: "14px",
      fontWeight: "500",
      marginBottom: "8px",
      color: "#374151",
    },
    input: {
      width: "100%",
      padding: "8px 12px",
      border: "1px solid #d1d5db",
      borderRadius: "4px",
      fontSize: "14px",
      outline: "none",
      transition: "border-color 0.2s",
      boxSizing: "border-box",
    },
    select: {
      width: "100%",
      padding: "8px 12px",
      border: "1px solid #d1d5db",
      borderRadius: "4px",
      fontSize: "14px",
      outline: "none",
      backgroundColor: "white",
      cursor: "pointer",
    },
    slider: {
      width: "100%",
      height: "6px",
      borderRadius: "3px",
      background: "#e2e8f0",
      outline: "none",
      cursor: "pointer",
    },
    sliderInfo: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "12px",
      color: "#6b7280",
      marginTop: "4px",
    },
    resultsBox: {
      backgroundColor: "#eff6ff",
      padding: "24px",
      borderRadius: "8px",
      marginBottom: "24px",
    },
    resultRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "16px",
    },
    resultLabel: {
      fontSize: "14px",
      color: "#6b7280",
    },
    resultValue: {
      fontWeight: "600",
    },
    totalValue: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "#2563eb",
    },
    separator: {
      height: "1px",
      backgroundColor: "#d1d5db",
      margin: "16px 0",
    },
    buttonGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "16px",
    },
    button: {
      padding: "12px 24px",
      border: "none",
      borderRadius: "4px",
      fontSize: "14px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "background-color 0.2s",
    },
    investButton: {
      backgroundColor: "#f97316",
      color: "white",
    },
    sipButton: {
      backgroundColor: "#2563eb",
      color: "white",
    },
    sidebar: {
      display: "flex",
      flexDirection: "column",
      gap: "24px",
    },
    searchBox: {
      padding: "16px",
    },
    searchInput: {
      width: "100%",
      padding: "8px 12px",
      border: "1px solid #d1d5db",
      borderRadius: "4px",
      fontSize: "12px",
      marginBottom: "12px",
      boxSizing: "border-box",
    },
    searchButton: {
      width: "100%",
      padding: "8px 16px",
      backgroundColor: "#2563eb",
      color: "white",
      border: "none",
      borderRadius: "4px",
      fontSize: "12px",
      cursor: "pointer",
    },
    searchNote: {
      fontSize: "10px",
      color: "#6b7280",
      marginTop: "8px",
    },
    calculatorList: {
      padding: "0 16px 16px 16px",
    },
    calculatorItem: {
      padding: "8px 0",
      fontSize: "14px",
      color: "#2563eb",
      cursor: "pointer",
      borderBottom: "1px solid #f1f5f9",
    },
    faqSection: {
      marginTop: "24px",
    },
    faqItem: {
      marginBottom: "24px",
      paddingBottom: "16px",
      borderBottom: "1px solid #e2e8f0",
    },
    faqQuestion: {
      fontWeight: "600",
      color: "#1f2937",
      marginBottom: "8px",
      fontSize: "14px",
    },
    faqAnswer: {
      fontSize: "13px",
      color: "#6b7280",
      lineHeight: "1.5",
    },
  }

  return (
    <div style={styles.container}>
      <div style={styles.mainWrapper}>
        {/* Main Calculator */}
        <div>
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <h1 style={styles.cardTitle}>📊 SIP calculator</h1>
            </div>
            <div style={styles.cardContent}>
              <div style={styles.inputGrid}>
                {/* Input Section */}
                <div>
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Frequency</label>
                    <select style={styles.select} value={frequency} onChange={(e) => setFrequency(e.target.value)}>
                      <option value="Monthly">Monthly</option>
                      <option value="Quarterly">Quarterly</option>
                      <option value="Yearly">Yearly</option>
                    </select>
                  </div>

                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Monthly</label>
                    <input
                      style={styles.input}
                      type="number"
                      value={monthlyAmount}
                      onChange={(e) => {
                        const value = Number.parseInt(e.target.value) || 0
                        setMonthlyAmount(value)
                        setSipAmount(value)
                      }}
                    />
                  </div>

                  <div style={styles.inputGroup}>
                    <label style={styles.label}>SIP amount</label>
                    <input
                      type="range"
                      style={styles.slider}
                      min="500"
                      max="100000"
                      step="500"
                      value={sipAmount}
                      onChange={(e) => setSipAmount(Number.parseInt(e.target.value))}
                    />
                    <div style={styles.sliderInfo}>
                      <span>₹500</span>
                      <span style={{ fontWeight: "600" }}>₹{sipAmount.toLocaleString()}</span>
                      <span>₹1,00,000</span>
                    </div>
                  </div>

                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Investment duration</label>
                    <input
                      type="range"
                      style={styles.slider}
                      min="1"
                      max="30"
                      step="1"
                      value={investmentDuration}
                      onChange={(e) => setInvestmentDuration(Number.parseInt(e.target.value))}
                    />
                    <div style={styles.sliderInfo}>
                      <span>1 Yr</span>
                      <span style={{ fontWeight: "600" }}>{investmentDuration} Yr</span>
                      <span>30 Yr</span>
                    </div>
                  </div>

                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Expected rate of return</label>
                    <input
                      type="range"
                      style={styles.slider}
                      min="1"
                      max="30"
                      step="0.5"
                      value={expectedReturn}
                      onChange={(e) => setExpectedReturn(Number.parseFloat(e.target.value))}
                    />
                    <div style={styles.sliderInfo}>
                      <span>1%</span>
                      <span style={{ fontWeight: "600" }}>{expectedReturn}%</span>
                      <span>30%</span>
                    </div>
                  </div>
                </div>

                {/* Results Section */}
                <div>
                  <div style={styles.resultsBox}>
                    <div style={styles.resultRow}>
                      <span style={styles.resultLabel}>Total investment</span>
                      <span style={styles.resultValue}>{formatCurrency(results.totalInvestment)}</span>
                    </div>
                    <div style={styles.resultRow}>
                      <span style={styles.resultLabel}>Expected returns</span>
                      <span style={{ ...styles.resultValue, color: "#16a34a" }}>
                        {formatCurrency(results.expectedReturns)}
                      </span>
                    </div>
                    <div style={styles.separator}></div>
                    <div style={styles.resultRow}>
                      <span style={{ ...styles.resultLabel, fontWeight: "600" }}>Total value</span>
                      <span style={styles.totalValue}>{formatCurrency(results.totalValue)}</span>
                    </div>
                  </div>

                  <div style={styles.buttonGrid}>
                    <button style={{ ...styles.button, ...styles.investButton }}>INVEST</button>
                    <button style={{ ...styles.button, ...styles.sipButton }}>SIP</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <h2 style={{ ...styles.cardTitle, fontSize: "20px" }}>❓ Frequently Asked Questions</h2>
            </div>
            <div style={styles.cardContent}>
              {faqs.map((faq, index) => (
                <div key={index} style={styles.faqItem}>
                  <h3 style={styles.faqQuestion}>{faq.question}</h3>
                  <p style={styles.faqAnswer}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div style={styles.sidebar}>
          {/* Search Box */}
          <div style={styles.card}>
            <div style={styles.searchBox}>
              <input style={styles.searchInput} placeholder="Search for Mutual Funds or Fund House" />
              <button style={styles.searchButton}>Search</button>
              <p style={styles.searchNote}>
                Investing in mutual funds? <span style={{ color: "#2563eb", cursor: "pointer" }}>COMPARE NOW</span>
              </p>
            </div>
          </div>

          {/* Popular Calculators */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <h3 style={{ ...styles.cardTitle, fontSize: "18px" }}>Popular Calculators</h3>
            </div>
            <div style={styles.calculatorList}>
              {popularCalculators.map((calc, index) => (
                <div key={index} style={styles.calculatorItem}>
                  🔢 {calc}
                </div>
              ))}
            </div>
          </div>

          {/* Popular Links */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <h3 style={{ ...styles.cardTitle, fontSize: "18px" }}>Popular Links</h3>
            </div>
            <div style={styles.calculatorList}>
              <div style={styles.calculatorItem}>🔗 How to invest a SIP via the CAMS app?</div>
              <div style={styles.calculatorItem}>🔗 How to invest a SIP via Coin app?</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalculatorSip;