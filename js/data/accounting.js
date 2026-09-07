// ============================================================
// ACCOUNTING — 200 Questions
// ============================================================

if (typeof window.SUBJECT_QUESTIONS === 'undefined') {
    window.SUBJECT_QUESTIONS = {};
}

var ACCOUNTING_QUESTIONS = [
    // ============================================================
    // SECTION A — COMPANIES, ACCOUNTING CONCEPTS AND GAAP/IFRS (1-20)
    // ============================================================
    {
        question: "A company issues 20 000 ordinary shares at R15 per share. What amount is credited to Ordinary Share Capital?",
        options: ["R20 000", "R150 000", "R300 000", "R350 000"],
        correct: 2,
        explanation: "20 000 × R15 = R300 000. Under the current treatment of shares of no par value, the issue proceeds are credited to Ordinary Share Capital."
    },
    {
        question: "Which characteristic best distinguishes a company from a sole trader?",
        options: ["The company has no accounting records", "The company is a separate legal entity", "The company cannot make profits", "The company does not pay expenses"],
        correct: 1,
        explanation: "A company has a legal identity separate from its shareholders."
    },
    {
        question: "A shareholder's liability in an ordinary company is generally:",
        options: ["unlimited", "limited to the amount invested or owed under the share agreement", "equal to company liabilities", "equal to the company's annual profit"],
        correct: 1,
        explanation: "Limited liability protects shareholders from generally being personally responsible for company debts beyond their investment."
    },
    {
        question: "Which account is unique to a company?",
        options: ["Capital", "Drawings", "Ordinary Share Capital", "Sales"],
        correct: 2,
        explanation: "Ordinary Share Capital records the capital raised through issuing shares."
    },
    {
        question: "A company buys back some of its own shares. This transaction will generally:",
        options: ["increase ordinary share capital", "reduce ordinary share capital", "increase sales", "increase cost of sales"],
        correct: 1,
        explanation: "A share buy-back reduces the company's issued share capital."
    },
    {
        question: "Which accounting principle requires transactions to be recorded in the period to which they relate?",
        options: ["Going concern", "Accrual basis", "Prudence only", "Historical cost only"],
        correct: 1,
        explanation: "The accrual basis recognises income and expenses when earned or incurred rather than simply when cash changes hands."
    },
    {
        question: "A company continues operating despite making a temporary loss because management expects the company to continue operating in the foreseeable future. This reflects:",
        options: ["going concern", "materiality", "consistency", "entity concept"],
        correct: 0,
        explanation: "The going-concern assumption means the business is expected to continue operating."
    },
    {
        question: "Which accounting concept requires a business's financial information to be presented consistently from period to period?",
        options: ["Consistency", "Business entity", "Matching only", "Realisation only"],
        correct: 0,
        explanation: "Consistency allows users to compare financial information between accounting periods."
    },
    {
        question: "The main purpose of financial statements is to:",
        options: ["hide financial problems", "provide useful financial information to users", "eliminate all business risks", "guarantee profitability"],
        correct: 1,
        explanation: "Financial statements provide information useful to owners, investors, creditors and other stakeholders."
    },
    {
        question: "IFRS primarily promotes:",
        options: ["internationally comparable financial reporting", "elimination of auditing", "guaranteed profits", "tax avoidance"],
        correct: 0,
        explanation: "International Financial Reporting Standards improve consistency and comparability of financial reporting."
    },
    {
        question: "Which stakeholder would be most interested in whether a company can repay a long-term loan?",
        options: ["Long-term creditor", "Customer only", "Competitor", "Employee's friend"],
        correct: 0,
        explanation: "Creditors need to assess the company's ability to repay debt."
    },
    {
        question: "A company's financial statements show assets of R8 million and liabilities of R3 million. Equity is:",
        options: ["R3 million", "R5 million", "R8 million", "R11 million"],
        correct: 1,
        explanation: "Assets = Equity + Liabilities. Equity = R8m − R3m = R5m."
    },
    {
        question: "If assets increase by R50 000 while liabilities remain unchanged, equity will:",
        options: ["decrease by R50 000", "increase by R50 000", "remain unchanged", "decrease to zero"],
        correct: 1,
        explanation: "With liabilities unchanged, the increase in assets increases equity."
    },
    {
        question: "Which transaction increases both an asset and a liability?",
        options: ["Cash sale", "Purchase of equipment on credit", "Payment to creditor", "Payment of rent"],
        correct: 1,
        explanation: "Equipment increases assets while the creditor liability also increases."
    },
    {
        question: "Which transaction decreases both an asset and a liability?",
        options: ["Purchase on credit", "Payment to a creditor", "Cash sale", "Issue of shares for cash"],
        correct: 1,
        explanation: "Cash decreases and the creditor liability decreases."
    },
    {
        question: "The accounting equation is:",
        options: ["Assets = Equity − Liabilities", "Assets = Equity + Liabilities", "Equity = Assets + Liabilities", "Liabilities = Assets + Equity"],
        correct: 1,
        explanation: "The fundamental accounting equation is Assets = Equity + Liabilities."
    },
    {
        question: "If a company receives R100 000 cash from shareholders in exchange for shares:",
        options: ["assets increase and equity increases", "assets decrease and equity increases", "liabilities increase and assets decrease", "expenses increase"],
        correct: 0,
        explanation: "Cash increases by R100 000 and share capital increases by R100 000."
    },
    {
        question: "Which transaction has no immediate effect on total equity?",
        options: ["Payment of an expense", "Cash purchase of equipment", "Cash sale at a profit", "Issue of shares"],
        correct: 1,
        explanation: "Cash decreases while equipment increases by the same amount."
    },
    {
        question: "Which accounting treatment best reflects the matching principle?",
        options: ["Record all cash payments as expenses immediately", "Match expenses with the income they helped generate", "Ignore outstanding expenses", "Record revenue only when customers pay"],
        correct: 1,
        explanation: "Expenses should be recognised in the period in which the related revenue is recognised."
    },
    {
        question: "Materiality means that:",
        options: ["every transaction must be disclosed in exactly the same way", "information that could influence users' decisions should receive appropriate attention", "only large companies must prepare statements", "small transactions are illegal"],
        correct: 1,
        explanation: "Material information could influence the decisions of users of financial statements."
    },

    // ============================================================
    // SECTION B — ADJUSTMENTS, TRIAL BALANCE AND FINANCIAL STATEMENTS (21-50)
    // ============================================================
    {
        question: "Rent paid for the next financial year is classified as:",
        options: ["accrued expense", "prepaid expense", "income received in advance", "bad debt"],
        correct: 1,
        explanation: "The business has paid for a future benefit, creating an asset."
    },
    {
        question: "An expense owing at year-end should:",
        options: ["be ignored", "increase the expense and create a current liability", "decrease the expense", "be recorded as an asset"],
        correct: 1,
        explanation: "An accrued expense belongs to the current period and is still payable."
    },
    {
        question: "Insurance paid in advance should be:",
        options: ["added to expenses", "deducted from insurance expense and shown as a current asset", "shown as a liability", "treated as income"],
        correct: 1,
        explanation: "The unused portion represents a future economic benefit."
    },
    {
        question: "Income received in advance is:",
        options: ["an asset", "a liability", "an expense", "equity"],
        correct: 1,
        explanation: "The company still owes the customer the service or benefit."
    },
    {
        question: "Depreciation is:",
        options: ["an increase in the cash balance", "allocation of the depreciable amount of an asset over its useful life", "the market value of an asset", "a liability"],
        correct: 1,
        explanation: "Depreciation allocates the cost of a fixed asset over its useful economic life."
    },
    {
        question: "Equipment costing R600 000 has a residual value of R60 000 and a useful life of 6 years. Straight-line depreciation per year is:",
        options: ["R60 000", "R90 000", "R100 000", "R110 000"],
        correct: 1,
        explanation: "(R600 000 − R60 000) ÷ 6 = R90 000."
    },
    {
        question: "Equipment costing R500 000 is depreciated at 20% p.a. on the diminishing-balance method. If accumulated depreciation at the beginning of the year is R100 000, current-year depreciation is:",
        options: ["R80 000", "R100 000", "R20 000", "R120 000"],
        correct: 0,
        explanation: "Carrying value = R500 000 − R100 000 = R400 000. 20% × R400 000 = R80 000."
    },
    {
        question: "A fixed asset with a carrying value of R90 000 is sold for R105 000. The result is:",
        options: ["loss of R15 000", "profit of R15 000", "profit of R105 000", "no profit or loss"],
        correct: 1,
        explanation: "R105 000 − R90 000 = R15 000 profit."
    },
    {
        question: "A fixed asset with a carrying value of R200 000 is sold for R170 000. The result is:",
        options: ["profit R30 000", "loss R30 000", "profit R170 000", "no loss"],
        correct: 1,
        explanation: "Selling price is R30 000 below carrying value."
    },
    {
        question: "Depreciation is recorded in the Statement of Comprehensive Income as:",
        options: ["an expense", "income", "a liability", "share capital"],
        correct: 0,
        explanation: "Depreciation is an operating expense."
    },
    {
        question: "Accumulated depreciation is shown in the Statement of Financial Position as:",
        options: ["an addition to the asset's cost", "a deduction from the asset's cost", "a current liability", "revenue"],
        correct: 1,
        explanation: "Cost less accumulated depreciation gives the carrying value."
    },
    {
        question: "Closing inventory is normally shown:",
        options: ["only as an expense", "as a current asset", "as a non-current liability", "as share capital"],
        correct: 1,
        explanation: "Inventory is expected to be sold in the normal operating cycle and is therefore a current asset."
    },
    {
        question: "If closing inventory is understated, gross profit will generally be:",
        options: ["overstated", "understated", "unaffected", "doubled"],
        correct: 1,
        explanation: "Understated closing inventory increases cost of sales and therefore reduces gross profit."
    },
    {
        question: "If cost of sales is overstated by R20 000, gross profit is:",
        options: ["overstated by R20 000", "understated by R20 000", "unaffected", "overstated by R40 000"],
        correct: 1,
        explanation: "Gross profit = Sales − Cost of Sales."
    },
    {
        question: "A debtor owing R10 000 is declared insolvent and only R4 000 is expected to be recovered. The irrecoverable portion is:",
        options: ["R4 000", "R6 000", "R10 000", "R14 000"],
        correct: 1,
        explanation: "R10 000 − R4 000 = R6 000 irrecoverable."
    },
    {
        question: "An irrecoverable debt written off will:",
        options: ["increase profit", "decrease profit", "increase share capital", "increase sales"],
        correct: 1,
        explanation: "Bad debts are expenses and reduce profit."
    },
    {
        question: "A trial balance primarily tests whether:",
        options: ["all transactions are correct", "total debits equal total credits", "no fraud exists", "the business is profitable"],
        correct: 1,
        explanation: "The trial balance tests arithmetic equality of debit and credit balances."
    },
    {
        question: "If the trial balance balances, this proves:",
        options: ["no accounting errors exist", "the books are mathematically balanced, but some errors may remain", "the company made a profit", "all transactions were authorised"],
        correct: 1,
        explanation: "Some errors do not affect trial balance equality."
    },
    {
        question: "Which error can occur without causing the trial balance to disagree?",
        options: ["Complete omission of a transaction", "Recording a debit without a credit", "Adding one ledger incorrectly", "Posting only one side of a transaction"],
        correct: 0,
        explanation: "If both sides of a transaction are completely omitted, debits and credits remain equal."
    },
    {
        question: "Gross profit is calculated as:",
        options: ["Sales − Cost of Sales", "Sales − Expenses", "Assets − Liabilities", "Income − Assets"],
        correct: 0,
        explanation: "Gross profit measures profit from trading activities before operating expenses."
    },
    {
        question: "Sales are R900 000 and cost of sales is R540 000. Gross profit is:",
        options: ["R360 000", "R540 000", "R900 000", "R1 440 000"],
        correct: 0,
        explanation: "R900 000 − R540 000 = R360 000."
    },
    {
        question: "If gross profit is R360 000 and operating expenses are R220 000, operating profit is:",
        options: ["R140 000", "R220 000", "R360 000", "R580 000"],
        correct: 0,
        explanation: "R360 000 − R220 000 = R140 000."
    },
    {
        question: "Which item is normally shown below gross profit in the Statement of Comprehensive Income?",
        options: ["Cost of sales", "Operating expenses", "Inventory", "Trade receivables"],
        correct: 1,
        explanation: "Operating expenses are deducted from gross profit to determine operating profit."
    },
    {
        question: "Finance cost is generally:",
        options: ["an expense", "sales income", "inventory", "share capital"],
        correct: 0,
        explanation: "Interest and other finance costs reduce profit."
    },
    {
        question: "Dividends paid to shareholders are generally:",
        options: ["operating expenses", "distributions of profit", "cost of sales", "trade creditors"],
        correct: 1,
        explanation: "Dividends distribute profits to shareholders rather than representing operating expenses."
    },
    {
        question: "Retained income represents:",
        options: ["only cash in the bank", "accumulated profits retained in the business after distributions and adjustments", "total liabilities", "inventory"],
        correct: 1,
        explanation: "Retained income represents accumulated undistributed profits."
    },
    {
        question: "A final dividend declared will generally:",
        options: ["increase retained income", "reduce retained income", "increase sales", "increase inventory"],
        correct: 1,
        explanation: "Dividends are distributions of profit."
    },
    {
        question: "An interim dividend is generally:",
        options: ["declared during the year", "an operating expense", "a liability to suppliers", "an inventory adjustment"],
        correct: 0,
        explanation: "An interim dividend is normally declared before the annual financial statements are finalised."
    },
    {
        question: "Which is a non-current asset?",
        options: ["Trade receivables", "Inventory", "Equipment", "Bank overdraft"],
        correct: 2,
        explanation: "Equipment is held for long-term use."
    },
    {
        question: "Which is normally a current liability?",
        options: ["Equipment", "Trade payables", "Share capital", "Retained income"],
        correct: 1,
        explanation: "Trade payables are amounts owed to suppliers, normally settled within the operating cycle."
    },

    // ============================================================
    // SECTION C — CASH FLOW STATEMENT (51-65)
    // ============================================================
    {
        question: "The main purpose of a Cash Flow Statement is to show:",
        options: ["profitability only", "movements in cash and cash equivalents", "inventory valuation only", "share prices"],
        correct: 1,
        explanation: "The Cash Flow Statement explains cash generated and used during the period."
    },
    {
        question: "Cash received from issuing shares is classified as:",
        options: ["operating activity", "investing activity", "financing activity", "non-cash activity"],
        correct: 2,
        explanation: "Share issues are financing activities."
    },
    {
        question: "Purchase of equipment for cash is:",
        options: ["operating", "investing", "financing", "equity income"],
        correct: 1,
        explanation: "Purchases and sales of long-term assets are investing activities."
    },
    {
        question: "Repayment of a loan is generally:",
        options: ["financing cash outflow", "operating cash inflow", "investing income", "revenue"],
        correct: 0,
        explanation: "Loan financing and repayment are financing activities."
    },
    {
        question: "Cash received from customers is generally:",
        options: ["operating cash flow", "investing cash flow", "financing cash flow", "equity"],
        correct: 0,
        explanation: "Cash from customers is generated by normal trading operations."
    },
    {
        question: "A company receives R500 000 from issuing shares and pays R150 000 to acquire equipment. Net effect on cash is:",
        options: ["R350 000 increase", "R650 000 increase", "R350 000 decrease", "no change"],
        correct: 0,
        explanation: "R500 000 − R150 000 = R350 000 increase."
    },
    {
        question: "A company has a negative cash flow from operating activities. This could indicate:",
        options: ["possible difficulty generating cash from normal operations", "guaranteed profitability", "no financial risk", "higher share capital"],
        correct: 0,
        explanation: "Persistent negative operating cash flow can indicate problems with the core business."
    },
    {
        question: "A company can be profitable but have cash-flow problems because:",
        options: ["profit and cash flow are identical", "revenue may include credit sales", "depreciation creates cash", "dividends increase cash"],
        correct: 1,
        explanation: "Credit sales increase profit before the cash is actually collected."
    },
    {
        question: "Depreciation is added back when reconciling profit to cash generated from operating activities because:",
        options: ["it is a cash inflow", "it is a non-cash expense", "it is revenue", "it increases inventory"],
        correct: 1,
        explanation: "Depreciation reduces accounting profit but does not involve a current cash payment."
    },
    {
        question: "An increase in trade receivables generally:",
        options: ["increases operating cash flow", "reduces cash generated from operations", "increases share capital", "has no effect on cash"],
        correct: 1,
        explanation: "More credit sales have been recognised without the corresponding cash collection."
    },
    {
        question: "An increase in trade payables generally:",
        options: ["reduces cash available", "increases cash retained from operations", "reduces liabilities", "reduces sales"],
        correct: 1,
        explanation: "The business has incurred expenses or purchased goods without yet paying suppliers."
    },
    {
        question: "Which is most likely an investing cash inflow?",
        options: ["Sale of equipment for cash", "Cash received from customers", "Share issue", "Loan received"],
        correct: 0,
        explanation: "Sale of a non-current asset is an investing activity."
    },
    {
        question: "Which is most likely a financing cash inflow?",
        options: ["Cash sales", "Loan received", "Sale of inventory", "Collection from debtors"],
        correct: 1,
        explanation: "Borrowing provides financing."
    },
    {
        question: "If closing cash is R250 000 and opening cash is R170 000, the net increase in cash is:",
        options: ["R80 000", "R420 000", "R170 000", "R250 000"],
        correct: 0,
        explanation: "R250 000 − R170 000 = R80 000."
    },
    {
        question: "A healthy business should not necessarily aim for:",
        options: ["positive operating cash flow", "sufficient liquidity", "excessive idle cash with no strategic purpose", "controlled financing"],
        correct: 2,
        explanation: "Excessive idle cash can represent inefficient use of resources."
    },

    // ============================================================
    // SECTION D — FINANCIAL ANALYSIS AND INTERPRETATION (66-100)
    // ============================================================
    {
        question: "Gross profit on sales is calculated as:",
        options: ["Gross profit ÷ Sales × 100", "Gross profit ÷ Cost of sales × 100", "Net profit ÷ Sales × 100", "Sales ÷ Gross profit × 100"],
        correct: 0,
        explanation: "Gross profit on sales = Gross profit ÷ Sales × 100."
    },
    {
        question: "Gross profit = R240 000 and sales = R800 000. Gross profit on sales is:",
        options: ["20%", "25%", "30%", "33.3%"],
        correct: 2,
        explanation: "240 000 ÷ 800 000 × 100 = 30%."
    },
    {
        question: "Gross profit = R240 000 and cost of sales = R600 000. Gross profit on cost of sales is:",
        options: ["30%", "40%", "60%", "25%"],
        correct: 1,
        explanation: "240 000 ÷ 600 000 × 100 = 40%."
    },
    {
        question: "Net profit on sales is:",
        options: ["Net profit ÷ sales × 100", "Net profit ÷ assets × 100", "Sales ÷ net profit × 100", "Gross profit ÷ sales × 100"],
        correct: 0,
        explanation: "Net profit on sales = Net profit ÷ Sales × 100."
    },
    {
        question: "A company has sales of R2 000 000 and net profit of R300 000. Net profit on sales is:",
        options: ["10%", "15%", "20%", "30%"],
        correct: 1,
        explanation: "R300 000 ÷ R2 000 000 × 100 = 15%."
    },
    {
        question: "If gross profit on sales falls from 40% to 32%, the most likely concern is:",
        options: ["improved mark-up", "reduced profitability from trading", "improved gross margin", "reduced cost of sales percentage"],
        correct: 1,
        explanation: "A lower gross-profit percentage means less gross profit is generated from each rand of sales."
    },
    {
        question: "Operating expenses on sales are:",
        options: ["Operating expenses ÷ Sales × 100", "Sales ÷ Operating expenses × 100", "Gross profit ÷ expenses × 100", "Operating profit ÷ sales × 100"],
        correct: 0,
        explanation: "Operating expenses on sales = Operating expenses ÷ Sales × 100."
    },
    {
        question: "If operating expenses increase while sales remain constant, operating expenses on sales will:",
        options: ["decrease", "increase", "remain unchanged", "become zero"],
        correct: 1,
        explanation: "Operating expenses on sales = Operating expenses ÷ Sales × 100."
    },
    {
        question: "A current ratio of 2:1 means:",
        options: ["current liabilities are twice current assets", "current assets are twice current liabilities", "total assets are twice equity", "cash is twice inventory"],
        correct: 1,
        explanation: "Current ratio = Current assets ÷ Current liabilities."
    },
    {
        question: "Current assets = R600 000 and current liabilities = R300 000. Current ratio:",
        options: ["0.5:1", "1:1", "2:1", "3:1"],
        correct: 2,
        explanation: "R600 000 ÷ R300 000 = 2:1."
    },
    {
        question: "The acid-test ratio differs from the current ratio because it excludes:",
        options: ["cash", "inventory", "receivables", "bank"],
        correct: 1,
        explanation: "The acid-test ratio excludes inventory as it may not be immediately convertible to cash."
    },
    {
        question: "A very high current ratio could indicate:",
        options: ["strong liquidity only", "possible inefficient use of current assets", "guaranteed profitability", "excessive depreciation"],
        correct: 1,
        explanation: "Excessive current assets can indicate idle cash or slow-moving inventory."
    },
    {
        question: "Solvency measures a company's:",
        options: ["long-term financial stability", "daily sales only", "stock turnover only", "employee productivity"],
        correct: 0,
        explanation: "Solvency measures long-term financial stability."
    },
    {
        question: "The solvency ratio is generally:",
        options: ["Total assets ÷ Total liabilities", "Current assets ÷ Current liabilities", "Net profit ÷ sales", "Sales ÷ inventory"],
        correct: 0,
        explanation: "Solvency ratio = Total assets ÷ Total liabilities."
    },
    {
        question: "If total assets are R10 million and total liabilities are R4 million, the solvency ratio is:",
        options: ["0.4:1", "1.5:1", "2.5:1", "4:1"],
        correct: 2,
        explanation: "R10m ÷ R4m = 2.5:1."
    },
    {
        question: "A high debt-equity ratio indicates:",
        options: ["greater reliance on borrowed funds", "no debt", "no financial risk", "high liquidity automatically"],
        correct: 0,
        explanation: "A high debt-equity ratio indicates greater reliance on borrowed funds."
    },
    {
        question: "If debt-equity ratio increases significantly, shareholders may face:",
        options: ["increased financial risk", "guaranteed higher dividends", "lower interest obligations", "no change in risk"],
        correct: 0,
        explanation: "Increased debt increases financial risk for shareholders."
    },
    {
        question: "Return on shareholders' equity measures:",
        options: ["profit earned relative to shareholders' investment", "inventory efficiency", "debt repayment period", "current assets"],
        correct: 0,
        explanation: "ROE measures profit earned relative to shareholders' investment."
    },
    {
        question: "Net profit = R500 000 and average shareholders' equity = R2 500 000. ROE is:",
        options: ["5%", "10%", "20%", "50%"],
        correct: 2,
        explanation: "500 000 ÷ 2 500 000 × 100 = 20%."
    },
    {
        question: "Earnings per share is calculated using:",
        options: ["Net profit available to ordinary shareholders ÷ number of ordinary shares", "Sales ÷ shares", "Assets ÷ shares", "Dividends ÷ liabilities"],
        correct: 0,
        explanation: "EPS = Net profit available to ordinary shareholders ÷ number of ordinary shares."
    },
    {
        question: "Net profit available to ordinary shareholders is R900 000 and there are 300 000 ordinary shares. EPS is:",
        options: ["R0.30", "R3.00", "R30.00", "R300.00"],
        correct: 1,
        explanation: "R900 000 ÷ 300 000 = R3.00."
    },
    {
        question: "Dividends per share are:",
        options: ["total dividends ÷ number of ordinary shares", "profit ÷ assets", "sales ÷ shares", "dividends × shares"],
        correct: 0,
        explanation: "DPS = total dividends ÷ number of ordinary shares."
    },
    {
        question: "Total ordinary dividends are R240 000 and there are 300 000 ordinary shares. DPS is:",
        options: ["R0.08", "R0.80", "R1.25", "R8.00"],
        correct: 1,
        explanation: "R240 000 ÷ 300 000 = R0.80."
    },
    {
        question: "Dividend pay-out rate measures:",
        options: ["the percentage of earnings distributed as dividends", "percentage of sales collected", "inventory turnover", "creditor payment period"],
        correct: 0,
        explanation: "Dividend pay-out rate = DPS ÷ EPS × 100."
    },
    {
        question: "If EPS is R5 and DPS is R2, dividend pay-out rate is:",
        options: ["20%", "40%", "60%", "250%"],
        correct: 1,
        explanation: "2 ÷ 5 × 100 = 40%."
    },
    {
        question: "A declining average debtors' collection period generally indicates:",
        options: ["customers are paying faster", "customers are paying slower", "inventory is increasing", "creditors are being paid faster"],
        correct: 0,
        explanation: "A declining collection period means customers are paying faster."
    },
    {
        question: "A company has average debtors of R400 000 and credit sales of R2.4 million. Using 365 days, the approximate collection period is:",
        options: ["30 days", "61 days", "90 days", "120 days"],
        correct: 1,
        explanation: "R400 000 ÷ R2.4m × 365 ≈ 61 days."
    },
    {
        question: "A rising stockholding period could indicate:",
        options: ["stock is moving more slowly", "stock is always improving", "sales have increased automatically", "no inventory risk"],
        correct: 0,
        explanation: "A rising stockholding period means stock is moving more slowly."
    },
    {
        question: "Stock turnover rate measures:",
        options: ["how many times stock is replaced during the period", "how many employees work in the warehouse", "how quickly debtors pay", "how much cash is available"],
        correct: 0,
        explanation: "Stock turnover rate measures how many times stock is replaced during the period."
    },
    {
        question: "A falling stock turnover rate may indicate:",
        options: ["slower movement of inventory", "faster inventory movement", "lower stockholding", "higher cash sales automatically"],
        correct: 0,
        explanation: "A falling stock turnover rate indicates slower inventory movement."
    },
    {
        question: "Average creditors' payment period increasing from 45 to 70 days could indicate:",
        options: ["the business is taking longer to pay suppliers", "suppliers are always paid immediately", "inventory is zero", "sales are zero"],
        correct: 0,
        explanation: "An increasing payment period means the business is taking longer to pay suppliers."
    },
    {
        question: "If a company has a high current ratio but a very low acid-test ratio, this suggests:",
        options: ["a large proportion of current assets may be inventory", "the company has no inventory", "the company has no current assets", "the company has no creditors"],
        correct: 0,
        explanation: "A high current ratio with low acid-test ratio suggests inventory makes up a large portion of current assets."
    },
    {
        question: "A favourable increase in return on equity means:",
        options: ["shareholders are earning a higher return on their investment", "debt has necessarily fallen", "sales have necessarily fallen", "dividends are zero"],
        correct: 0,
        explanation: "An increase in ROE means shareholders are earning a higher return."
    },
    {
        question: "If a company has strong profitability but weak liquidity, management should be particularly concerned about:",
        options: ["its ability to meet short-term obligations", "its gross profit only", "its share price only", "its depreciation method only"],
        correct: 0,
        explanation: "Weak liquidity despite strong profitability indicates potential short-term cash flow problems."
    },
    {
        question: "The strongest financial analysis should:",
        options: ["rely on one ratio only", "compare trends, ratios and relevant business circumstances", "ignore previous years", "ignore industry information"],
        correct: 1,
        explanation: "Good analysis considers trends, relationships between indicators and the circumstances of the business."
    },

    // ============================================================
    // SECTION E — RECONCILIATIONS (101-120)
    // ============================================================
    {
        question: "The purpose of a bank reconciliation is to:",
        options: ["determine gross profit", "explain differences between the bank statement and Bank Account", "calculate depreciation", "calculate VAT only"],
        correct: 1,
        explanation: "A bank reconciliation explains differences between the bank statement and the Bank Account."
    },
    {
        question: "An outstanding cheque is a cheque:",
        options: ["recorded by the bank but not the business", "recorded by the business but not yet processed by the bank", "never issued", "received from a debtor"],
        correct: 1,
        explanation: "An outstanding cheque has been recorded by the business but not yet processed by the bank."
    },
    {
        question: "A deposit not yet reflected on the bank statement is commonly called:",
        options: ["an outstanding deposit", "an outstanding cheque", "bank charges", "dishonoured cheque"],
        correct: 0,
        explanation: "An outstanding deposit is a deposit not yet reflected on the bank statement."
    },
    {
        question: "Bank charges appearing on the bank statement but not yet recorded in the books require:",
        options: ["a debit to Bank and credit to Bank Charges", "a debit to Bank Charges and credit to Bank", "no entry", "a debit to Sales"],
        correct: 1,
        explanation: "Bank charges are an expense and reduce the bank balance."
    },
    {
        question: "A dishonoured cheque from a debtor means:",
        options: ["cash was successfully received", "the debtor's payment failed", "the company made a profit", "the creditor was paid"],
        correct: 1,
        explanation: "A dishonoured cheque means the debtor's payment failed."
    },
    {
        question: "When a debtor's cheque is dishonoured, the debtor's account should generally:",
        options: ["be increased", "be reduced", "be closed", "become an asset of zero value"],
        correct: 0,
        explanation: "The amount previously received must again be owed by the debtor."
    },
    {
        question: "A favourable bank balance represents:",
        options: ["an asset", "a liability", "an expense", "income"],
        correct: 0,
        explanation: "A favourable bank balance is an asset."
    },
    {
        question: "A bank overdraft generally represents:",
        options: ["an asset", "a current liability", "inventory", "equity"],
        correct: 1,
        explanation: "A bank overdraft is a current liability."
    },
    {
        question: "The debtors' reconciliation is primarily used to:",
        options: ["compare the debtors control balance with the debtors' ledger", "calculate depreciation", "calculate gross profit", "calculate VAT"],
        correct: 0,
        explanation: "The debtors' reconciliation compares the debtors control balance with the debtors' ledger."
    },
    {
        question: "If the Debtors Control balance is R300 000 but the list of individual debtors totals R290 000, the difference is:",
        options: ["R10 000", "R590 000", "R290 000", "R300 000"],
        correct: 0,
        explanation: "R300 000 − R290 000 = R10 000."
    },
    {
        question: "An age analysis of debtors is useful because it:",
        options: ["identifies how long amounts have been outstanding", "calculates depreciation", "calculates share capital", "measures inventory quantity"],
        correct: 0,
        explanation: "An age analysis identifies how long amounts have been outstanding."
    },
    {
        question: "A debtor outstanding for 120 days presents:",
        options: ["less collection risk than a current account", "potentially greater collection risk", "no risk", "guaranteed payment"],
        correct: 1,
        explanation: "A debtor outstanding for 120 days presents greater collection risk."
    },
    {
        question: "If a business's average collection period increases substantially, management should investigate:",
        options: ["credit control", "depreciation only", "share issue prices only", "production costs only"],
        correct: 0,
        explanation: "An increasing collection period indicates potential credit control problems."
    },
    {
        question: "A creditors' reconciliation compares:",
        options: ["supplier statements with the Creditors Ledger/Control Account", "bank and cash only", "assets and liabilities", "sales and purchases only"],
        correct: 0,
        explanation: "A creditors' reconciliation compares supplier statements with the Creditors Ledger/Control Account."
    },
    {
        question: "A supplier's statement shows R85 000 owed while the Creditors Ledger shows R80 000. The difference is:",
        options: ["R5 000", "R80 000", "R85 000", "R165 000"],
        correct: 0,
        explanation: "R85 000 − R80 000 = R5 000."
    },
    {
        question: "An omitted invoice from a supplier would generally cause creditors to be:",
        options: ["understated", "overstated", "unchanged", "eliminated"],
        correct: 0,
        explanation: "An omitted invoice would cause creditors to be understated."
    },
    {
        question: "A credit note received from a supplier generally:",
        options: ["increases the amount owed", "reduces the amount owed", "increases sales", "increases inventory automatically"],
        correct: 1,
        explanation: "A credit note reduces the amount owed to the supplier."
    },
    {
        question: "A debit note issued by a supplier generally indicates:",
        options: ["the supplier is increasing the amount charged", "the supplier is reducing the debt", "the customer has received cash", "no transaction occurred"],
        correct: 0,
        explanation: "A debit note issued by a supplier indicates the supplier is increasing the amount charged."
    },
    {
        question: "Which control is most useful for reducing overdue debtors?",
        options: ["Regular age analysis and follow-up", "No credit checks", "Unlimited credit", "Ignoring overdue accounts"],
        correct: 0,
        explanation: "Regular age analysis and follow-up are most useful for reducing overdue debtors."
    },
    {
        question: "The strongest reconciliation system should:",
        options: ["identify differences and investigate their causes", "simply adjust figures until they agree", "ignore small differences", "remove all debtor accounts"],
        correct: 0,
        explanation: "A strong reconciliation system identifies differences and investigates their causes."
    },

    // ============================================================
    // SECTION F — VAT (121-135)
    // ============================================================
    {
        question: "VAT stands for:",
        options: ["Value Added Tax", "Variable Accounting Tax", "Value Asset Transfer", "Value Allocation Transaction"],
        correct: 0,
        explanation: "VAT stands for Value Added Tax."
    },
    {
        question: "VAT charged by a registered business on taxable sales is:",
        options: ["input VAT", "output VAT", "capital VAT", "expense VAT"],
        correct: 1,
        explanation: "VAT charged on taxable sales is output VAT."
    },
    {
        question: "VAT paid by a business on qualifying purchases is:",
        options: ["output VAT", "input VAT", "sales VAT", "profit VAT"],
        correct: 1,
        explanation: "VAT paid on qualifying purchases is input VAT."
    },
    {
        question: "If output VAT is greater than input VAT, the business generally:",
        options: ["owes VAT to SARS", "receives the difference from SARS", "records no VAT", "increases inventory"],
        correct: 0,
        explanation: "If output VAT > input VAT, the business owes VAT to SARS."
    },
    {
        question: "If input VAT exceeds output VAT, the business may:",
        options: ["have a VAT receivable", "automatically owe the difference", "record sales income", "record depreciation"],
        correct: 0,
        explanation: "If input VAT exceeds output VAT, the business has a VAT receivable."
    },
    {
        question: "Assuming VAT is 15%, VAT-exclusive sales of R20 000 have VAT of:",
        options: ["R1 500", "R2 000", "R3 000", "R3 500"],
        correct: 2,
        explanation: "R20 000 × 15% = R3 000."
    },
    {
        question: "A VAT-inclusive amount of R23 000 at 15% VAT has a VAT-exclusive value of approximately:",
        options: ["R19 550", "R20 000", "R20 500", "R23 000"],
        correct: 1,
        explanation: "R23 000 ÷ 1.15 = R20 000."
    },
    {
        question: "The VAT component of R23 000 inclusive of 15% VAT is:",
        options: ["R2 000", "R3 000", "R3 450", "R20 000"],
        correct: 1,
        explanation: "R23 000 − R20 000 = R3 000."
    },
    {
        question: "Output VAT is R90 000 and input VAT is R62 000. VAT payable is:",
        options: ["R28 000", "R62 000", "R90 000", "R152 000"],
        correct: 0,
        explanation: "R90 000 − R62 000 = R28 000."
    },
    {
        question: "A VAT Control Account is used to:",
        options: ["determine the net VAT payable or receivable", "calculate gross profit", "calculate depreciation", "record share capital"],
        correct: 0,
        explanation: "A VAT Control Account determines the net VAT payable or receivable."
    },
    {
        question: "Which transaction generates output VAT?",
        options: ["Taxable sale", "Taxable purchase", "Depreciation", "Loan repayment"],
        correct: 0,
        explanation: "A taxable sale generates output VAT."
    },
    {
        question: "Which transaction generally generates input VAT?",
        options: ["Qualifying purchase", "Cash sale", "Share issue", "Loan received"],
        correct: 0,
        explanation: "A qualifying purchase generates input VAT."
    },
    {
        question: "If output VAT increases while input VAT remains unchanged, VAT payable will:",
        options: ["increase", "decrease", "remain unchanged", "become zero"],
        correct: 0,
        explanation: "If output VAT increases, VAT payable increases."
    },
    {
        question: "A business should not treat VAT collected from customers as:",
        options: ["revenue belonging entirely to the business", "an amount that may become payable to SARS", "output VAT", "a tax-related liability"],
        correct: 0,
        explanation: "VAT collected from customers is not revenue belonging entirely to the business."
    },
    {
        question: "Why is accurate VAT record-keeping important?",
        options: ["To ensure correct VAT reporting and compliance", "To eliminate all expenses", "To guarantee profit", "To avoid recording sales"],
        correct: 0,
        explanation: "Accurate VAT record-keeping ensures correct VAT reporting and compliance."
    },

    // ============================================================
    // SECTION G — MANUFACTURING (136-160)
    // ============================================================
    {
        question: "Direct material is:",
        options: ["material that can be directly traced to a product", "office stationery", "advertising", "administration salaries"],
        correct: 0,
        explanation: "Direct material can be directly traced to a product."
    },
    {
        question: "Direct labour refers to:",
        options: ["wages directly involved in production", "office cleaning", "sales commissions only", "directors' fees only"],
        correct: 0,
        explanation: "Direct labour refers to wages directly involved in production."
    },
    {
        question: "Factory overheads are:",
        options: ["indirect manufacturing costs", "direct materials only", "sales revenue", "dividends"],
        correct: 0,
        explanation: "Factory overheads are indirect manufacturing costs."
    },
    {
        question: "Prime cost consists of:",
        options: ["direct material + direct labour + direct expenses", "factory overhead + administration", "sales + profit", "inventory + creditors"],
        correct: 0,
        explanation: "Prime cost = direct material + direct labour + direct expenses."
    },
    {
        question: "Direct materials are R300 000 and direct labour is R180 000. Direct expenses are R20 000. Prime cost is:",
        options: ["R480 000", "R500 000", "R520 000", "R600 000"],
        correct: 1,
        explanation: "R300 000 + R180 000 + R20 000 = R500 000."
    },
    {
        question: "If factory overheads are R150 000, total factory cost before work-in-progress adjustments is:",
        options: ["R350 000", "R500 000", "R650 000", "R800 000"],
        correct: 2,
        explanation: "R500 000 + R150 000 = R650 000."
    },
    {
        question: "Opening work-in-progress is R40 000 and closing work-in-progress is R60 000. Compared with the preliminary production cost, final cost of production will:",
        options: ["increase by R20 000", "decrease by R20 000", "remain unchanged", "increase by R100 000"],
        correct: 1,
        explanation: "Opening WIP is added and closing WIP is deducted. The R20 000 increase in closing WIP reduces current production cost."
    },
    {
        question: "A manufacturing business produces 10 000 units at total production cost of R800 000. Cost per unit is:",
        options: ["R8", "R80", "R800", "R0.80"],
        correct: 0,
        explanation: "R800 000 ÷ 10 000 = R8."
    },
    {
        question: "Variable cost per unit is R25 and fixed costs are R300 000. At 20 000 units, total cost is:",
        options: ["R500 000", "R800 000", "R1 000 000", "R1 300 000"],
        correct: 1,
        explanation: "Variable cost = 20 000 × R25 = R500 000. Total = R500 000 + R300 000 = R800 000."
    },
    {
        question: "Fixed costs:",
        options: ["change directly with units produced", "remain constant within a relevant range", "are always zero", "equal variable costs"],
        correct: 1,
        explanation: "Fixed costs remain constant within a relevant range."
    },
    {
        question: "Variable cost:",
        options: ["generally changes with production volume", "never changes", "is always an asset", "is always a liability"],
        correct: 0,
        explanation: "Variable cost generally changes with production volume."
    },
    {
        question: "Selling price is R80 per unit and variable cost is R50. Contribution per unit is:",
        options: ["R20", "R30", "R50", "R130"],
        correct: 1,
        explanation: "R80 − R50 = R30."
    },
    {
        question: "Contribution per unit equals:",
        options: ["Selling price − Variable cost per unit", "Fixed cost − Sales", "Sales − Fixed cost", "Variable cost − Selling price"],
        correct: 0,
        explanation: "Contribution per unit = Selling price − Variable cost per unit."
    },
    {
        question: "Fixed costs are R600 000 and contribution per unit is R30. Break-even point is:",
        options: ["10 000 units", "15 000 units", "20 000 units", "30 000 units"],
        correct: 2,
        explanation: "R600 000 ÷ R30 = 20 000 units."
    },
    {
        question: "If actual production is 25 000 units and break-even is 20 000 units, the margin of safety is:",
        options: ["2 000 units", "5 000 units", "20 000 units", "45 000 units"],
        correct: 1,
        explanation: "25 000 − 20 000 = 5 000 units."
    },
    {
        question: "If the selling price increases while variable cost remains unchanged:",
        options: ["contribution per unit increases", "contribution decreases", "break-even must increase", "fixed costs increase automatically"],
        correct: 0,
        explanation: "If selling price increases, contribution per unit increases."
    },
    {
        question: "If variable cost increases while selling price remains unchanged:",
        options: ["contribution per unit decreases", "contribution increases", "break-even necessarily falls", "fixed costs disappear"],
        correct: 0,
        explanation: "If variable cost increases, contribution per unit decreases."
    },
    {
        question: "If fixed costs increase while contribution per unit remains unchanged:",
        options: ["break-even point increases", "break-even decreases", "contribution increases", "selling price changes automatically"],
        correct: 0,
        explanation: "If fixed costs increase, break-even point increases."
    },
    {
        question: "A manufacturer sells a product for R120. Variable cost is R70. Fixed costs are R500 000. Break-even is:",
        options: ["5 000 units", "8 333 units", "10 000 units", "12 500 units"],
        correct: 2,
        explanation: "Contribution = R120 − R70 = R50. R500 000 ÷ R50 = 10 000 units."
    },
    {
        question: "At 15 000 units in the previous question, the margin of safety is:",
        options: ["2 500 units", "5 000 units", "10 000 units", "15 000 units"],
        correct: 1,
        explanation: "15 000 − 10 000 = 5 000 units."
    },
    {
        question: "A manufacturer should investigate an unfavourable increase in unit cost because it could:",
        options: ["reduce competitiveness and profitability", "guarantee higher profit", "eliminate fixed costs", "increase contribution automatically"],
        correct: 0,
        explanation: "An increase in unit cost could reduce competitiveness and profitability."
    },
    {
        question: "If production increases while fixed costs remain constant, fixed cost per unit generally:",
        options: ["decreases", "increases", "remains identical", "doubles automatically"],
        correct: 0,
        explanation: "If production increases, fixed cost per unit decreases."
    },
    {
        question: "This is an example of:",
        options: ["economies of scale", "diminishing revenue", "insolvency", "stock theft"],
        correct: 0,
        explanation: "Spreading fixed costs over more units reduces fixed cost per unit."
    },
    {
        question: "A manufacturer produces below break-even. The business is:",
        options: ["making a profit", "making a loss", "guaranteed to break even", "earning zero contribution"],
        correct: 1,
        explanation: "Below break-even means the business is making a loss."
    },
    {
        question: "The best use of break-even analysis is to:",
        options: ["support planning and decision-making", "guarantee sales", "replace all accounting records", "determine VAT only"],
        correct: 0,
        explanation: "Break-even analysis supports planning and decision-making."
    },

    // ============================================================
    // SECTION H — INVENTORY VALUATION AND CONTROL (161-175)
    // ============================================================
    {
        question: "Under FIFO, inventory issued is assumed to come from:",
        options: ["most recent purchases first", "oldest purchases first", "average purchases only", "random purchases"],
        correct: 1,
        explanation: "Under FIFO, inventory issued is assumed to come from oldest purchases first."
    },
    {
        question: "A business has: 100 units @ R10 and 100 units @ R14. It sells 120 units. Under FIFO, cost of sales is:",
        options: ["R1 200", "R1 280", "R1 400", "R1 680"],
        correct: 1,
        explanation: "100 × R10 = R1 000. 20 × R14 = R280. Total = R1 280."
    },
    {
        question: "Using the same information, closing inventory under FIFO is:",
        options: ["R800", "R1 000", "R1 120", "R1 400"],
        correct: 2,
        explanation: "80 units remain × R14 = R1 120."
    },
    {
        question: "Weighted-average inventory valuation:",
        options: ["uses only the oldest purchases", "calculates an average cost per unit", "uses only the latest purchase", "ignores quantities"],
        correct: 1,
        explanation: "Weighted-average calculates an average cost per unit."
    },
    {
        question: "A business has: 100 units @ R10 and 100 units @ R14. Weighted average cost per unit is:",
        options: ["R10", "R12", "R14", "R24"],
        correct: 1,
        explanation: "(100 × R10 + 100 × R14) ÷ 200 = R12."
    },
    {
        question: "Under the weighted-average method, 120 units sold from the previous question have cost of sales of:",
        options: ["R1 000", "R1 200", "R1 440", "R1 680"],
        correct: 2,
        explanation: "120 × R12 = R1 440."
    },
    {
        question: "Specific identification is particularly suitable when:",
        options: ["individual high-value items can be separately identified", "all units are identical and low-value", "inventory has no identifying features", "stock is never sold"],
        correct: 0,
        explanation: "Specific identification is suitable when individual high-value items can be separately identified."
    },
    {
        question: "Which control best reduces inventory theft?",
        options: ["Regular stock counts and segregation of duties", "No stock records", "Unlimited access", "No authorisation procedures"],
        correct: 0,
        explanation: "Regular stock counts and segregation of duties best reduce inventory theft."
    },
    {
        question: "Perpetual inventory systems:",
        options: ["continuously update inventory records", "update inventory only annually", "do not record purchases", "cannot identify shortages"],
        correct: 0,
        explanation: "Perpetual inventory systems continuously update inventory records."
    },
    {
        question: "A periodic inventory system determines closing inventory primarily through:",
        options: ["physical stocktaking", "daily automated perpetual records only", "bank reconciliation", "debtors analysis"],
        correct: 0,
        explanation: "A periodic inventory system determines closing inventory through physical stocktaking."
    },
    {
        question: "If physical inventory is less than the recorded balance, the difference may indicate:",
        options: ["stock shortage", "increased capital", "higher sales automatically", "higher share capital"],
        correct: 0,
        explanation: "If physical inventory is less than recorded balance, the difference may indicate stock shortage."
    },
    {
        question: "Slow-moving inventory creates a risk of:",
        options: ["obsolescence", "guaranteed profit", "increased liquidity", "lower storage costs automatically"],
        correct: 0,
        explanation: "Slow-moving inventory creates a risk of obsolescence."
    },
    {
        question: "A stock turnover rate of 12 times means inventory is approximately:",
        options: ["sold/replaced 12 times during the period", "sold once every 12 years", "held for 12 years", "never sold"],
        correct: 0,
        explanation: "A stock turnover rate of 12 times means inventory is sold/replaced 12 times during the period."
    },
    {
        question: "If stock turnover falls from 10 times to 6 times, management should investigate:",
        options: ["slower inventory movement", "guaranteed improvement", "increased sales automatically", "lower stockholding period"],
        correct: 0,
        explanation: "A falling stock turnover rate indicates slower inventory movement."
    },
    {
        question: "Which is the strongest inventory control?",
        options: ["Authorised purchases, secure storage, stock records and regular counts", "No stocktaking", "One employee controls everything", "Unauthorised access"],
        correct: 0,
        explanation: "Authorised purchases, secure storage, stock records and regular counts provide the strongest inventory control."
    },

    // ============================================================
    // SECTION I — CASH BUDGETS AND PROJECTED FINANCIAL INFORMATION (176-190)
    // ============================================================
    {
        question: "A Cash Budget primarily forecasts:",
        options: ["cash receipts and payments", "depreciation only", "stock valuation only", "shareholders' equity only"],
        correct: 0,
        explanation: "A Cash Budget primarily forecasts cash receipts and payments."
    },
    {
        question: "A cash budget shows expected cash receipts of R900 000 and payments of R750 000. Net cash flow is:",
        options: ["R150 000 inflow", "R150 000 outflow", "R1 650 000 inflow", "R750 000 inflow"],
        correct: 0,
        explanation: "R900 000 − R750 000 = R150 000 inflow."
    },
    {
        question: "Opening bank balance is R100 000 and net cash inflow is R150 000. Closing balance before other adjustments is:",
        options: ["R50 000", "R150 000", "R250 000", "R300 000"],
        correct: 2,
        explanation: "R100 000 + R150 000 = R250 000."
    },
    {
        question: "A loan repayment appears in the Cash Budget because it:",
        options: ["involves a cash payment", "is always an operating expense", "is cost of sales", "increases profit"],
        correct: 0,
        explanation: "A loan repayment involves a cash payment."
    },
    {
        question: "A loan repayment does not necessarily appear as an expense in the projected income statement because:",
        options: ["repayment reduces the liability rather than representing the cost of borrowing", "it increases sales", "it increases inventory", "it is always depreciation"],
        correct: 0,
        explanation: "Repayment reduces the liability rather than representing the cost of borrowing."
    },
    {
        question: "Interest on a loan is:",
        options: ["a finance expense", "repayment of capital", "inventory", "share capital"],
        correct: 0,
        explanation: "Interest on a loan is a finance expense."
    },
    {
        question: "If 40% of sales are cash and total sales are R500 000, cash sales are:",
        options: ["R100 000", "R200 000", "R300 000", "R400 000"],
        correct: 1,
        explanation: "R500 000 × 40% = R200 000."
    },
    {
        question: "If 60% of sales are credit sales and total sales are R500 000, credit sales are:",
        options: ["R200 000", "R250 000", "R300 000", "R400 000"],
        correct: 2,
        explanation: "R500 000 × 60% = R300 000."
    },
    {
        question: "A business expects 70% of credit sales to be collected in the month after sale. Credit sales for June are R400 000. Expected July collection from June credit sales is:",
        options: ["R120 000", "R280 000", "R300 000", "R400 000"],
        correct: 1,
        explanation: "R400 000 × 70% = R280 000."
    },
    {
        question: "If 20% of purchases are paid immediately and purchases total R300 000, immediate payment is:",
        options: ["R30 000", "R60 000", "R120 000", "R240 000"],
        correct: 1,
        explanation: "R300 000 × 20% = R60 000."
    },
    {
        question: "A cash budget is particularly useful because it can:",
        options: ["identify possible cash shortages in advance", "guarantee profit", "eliminate all expenses", "eliminate creditors"],
        correct: 0,
        explanation: "A cash budget can identify possible cash shortages in advance."
    },
    {
        question: "A projected income statement differs from a Cash Budget because:",
        options: ["income statements use accrual accounting while cash budgets focus on cash movements", "both are exactly identical", "income statements contain only cash transactions", "cash budgets ignore cash"],
        correct: 0,
        explanation: "Income statements use accrual accounting while cash budgets focus on cash movements."
    },
    {
        question: "If actual sales are significantly below budgeted sales, management should:",
        options: ["investigate the reason and adjust plans", "ignore the difference", "automatically increase expenses", "stop accounting records"],
        correct: 0,
        explanation: "If actual sales are significantly below budget, management should investigate the reason and adjust plans."
    },
    {
        question: "A favourable cash-budget variance occurs when:",
        options: ["actual cash balance is better than expected", "actual cash is always lower than budget", "sales are always zero", "expenses always exceed income"],
        correct: 0,
        explanation: "A favourable cash-budget variance occurs when actual cash balance is better than expected."
    },
    {
        question: "Comparing actual results with budgeted results is called:",
        options: ["variance analysis", "depreciation", "stock valuation", "capitalisation"],
        correct: 0,
        explanation: "Comparing actual results with budgeted results is called variance analysis."
    },

    // ============================================================
    // SECTION J — INTERNAL CONTROL, AUDITING AND ETHICS (191-200)
    // ============================================================
    {
        question: "The primary purpose of internal control is to:",
        options: ["protect assets, improve reliability and reduce errors/fraud", "guarantee profits", "eliminate employees", "increase tax automatically"],
        correct: 0,
        explanation: "The primary purpose of internal control is to protect assets, improve reliability and reduce errors/fraud."
    },
    {
        question: "Segregation of duties means:",
        options: ["one employee controls every stage", "responsibilities are divided among different employees", "no employee has responsibilities", "only management performs transactions"],
        correct: 1,
        explanation: "Segregation of duties divides responsibilities among different employees."
    },
    {
        question: "Why is segregation of duties important?",
        options: ["It reduces the opportunity for one person to commit and conceal fraud", "It guarantees no errors", "It eliminates accounting", "It increases stock automatically"],
        correct: 0,
        explanation: "Segregation of duties reduces the opportunity for one person to commit and conceal fraud."
    },
    {
        question: "A cashier who receives cash should ideally not also:",
        options: ["count cash", "be responsible for recording and reconciling the same transactions without independent review", "issue receipts", "serve customers"],
        correct: 1,
        explanation: "The cashier should not be responsible for recording and reconciling the same transactions without independent review."
    },
    {
        question: "An internal auditor primarily:",
        options: ["evaluates internal controls and risk management", "sells company products", "manages all suppliers", "determines market prices"],
        correct: 0,
        explanation: "An internal auditor evaluates internal controls and risk management."
    },
    {
        question: "An independent external auditor's primary role is to:",
        options: ["express an opinion on whether financial statements are fairly presented according to the applicable framework", "guarantee future profits", "manage the company's daily operations", "prepare every source document"],
        correct: 0,
        explanation: "An external auditor expresses an opinion on whether financial statements are fairly presented."
    },
    {
        question: "An auditor should demonstrate:",
        options: ["independence and objectivity", "personal loyalty to management above all else", "willingness to hide fraud", "financial dependence on the client"],
        correct: 0,
        explanation: "An auditor should demonstrate independence and objectivity."
    },
    {
        question: "A conflict of interest occurs when:",
        options: ["personal interests could improperly influence professional judgement", "an employee follows procedures", "an auditor remains independent", "a company prepares financial statements"],
        correct: 0,
        explanation: "A conflict of interest occurs when personal interests could improperly influence professional judgement."
    },
    {
        question: "Which action is most clearly unethical?",
        options: ["Reporting a discovered error", "Deliberately manipulating financial statements to make profits appear higher", "Following internal controls", "Performing an authorised stock count"],
        correct: 1,
        explanation: "Deliberately manipulating financial statements is clearly unethical."
    },
    {
        question: "A manager discovers that inventory has been deliberately overstated to improve the company's financial position. The most appropriate response is to:",
        options: ["ignore it because it benefits the company", "report and investigate the matter through the appropriate channels", "increase the overstatement", "destroy the inventory records"],
        correct: 1,
        explanation: "Deliberately overstating inventory is unethical and can materially misrepresent profit and assets. Proper reporting and investigation are required."
    }
];

// Register this subject's questions

window.SUBJECT_QUESTIONS = window.SUBJECT_QUESTIONS || {};
window.SUBJECT_QUESTIONS['accounting'] = ACCOUNTING_QUESTIONS;
console.log('✅ Accounting loaded:', window.SUBJECT_QUESTIONS['accounting'].length, 'questions');