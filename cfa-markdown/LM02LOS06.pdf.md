- If a bond's price is known, the bond's implied return can be computed using the bond's price and its promised future cash flows.
- A stock's required return can be estimated given the stock's current price and assumptions about its expected future dividends and growth rates.
- A stock's implied dividend growth rate can be estimated given the stock's current price and assumptions about its expected future dividends and required return.
- If valuing two (or more) cash flow streams, the cash flow additivity principle allows for the cash flow streams to be compared (as long as the cash flows occur at the same point in time).
- Application of cash flow additivity allows for confirmation that asset prices are the same for economically equivalent assets (even if the assets have differing cash flow streams).
- Several real-world applications of cash flow additivity are used to illustrate no-arbitrage pricing.


## TIME VALUE OF MONEY IN FIXED INCOME AND EQUITY

calculate and interpret the present value (PV) of fixed-income and equity instruments based on expected future cash flows

The timing of cash flows associated with financial instruments affects their value, with cash inflows valued more highly the sooner they are received. The time value of money represents the trade-off between cash flows received today versus those received on a future date, allowing the comparison of the current or present value of one or more cash flows to those received at different times in the future. This difference is based upon an appropriate discount rate $r$ as shown in the prior learning module, which varies based upon the type of instrument and the timing and riskiness of expected cash flows.

In general, the relationship between a current or present value $(P V)$ and future value $(F V)$ of a cash flow, where $r$ is the stated discount rate per period and $t$ is the number of compounding periods, is as follows:

$$
\mathrm{FV}_{t}=\mathrm{PV}(1+r)^{t}
$$

If the number of compounding periods $t$ is very large, that is, $t \rightarrow \infty$, we compound the initial cash flow on a continuous basis as follows:

$$
\mathrm{FV}_{t}=\mathrm{PV} e^{r t}
$$

Conversely, present values can be expressed in future value terms, which requires recasting Equation 1 as follows:

$$
\begin{aligned}
& \mathrm{FV}_{t}=\mathrm{PV}(1+r)^{t} \\
& \mathrm{PV}=\mathrm{FV}_{t}\left[\frac{1}{(1+r)^{t}}\right] . \\
& \mathrm{PV}=\mathrm{FV}_{t}(1+r)^{-t}
\end{aligned}
$$

The continuous time equivalent expression of Equation 3 is as follows:

$$
\mathrm{PV}_{t}=\mathrm{FV}^{-r t} .
$$

## Fixed-Income Instruments and the Time Value of Money

Fixed-income instruments are debt instruments, such as a bond or a loan, that represent contracts under which an issuer borrows money from an investor in exchange for a promise of future repayment. The discount rate for fixed-income instruments is an interest rate, and the rate of return on a bond or loan is often referred to as its yield-to-maturity (YTM).

Cash flows associated with fixed-income instruments usually follow one of three general patterns:

- Discount: An investor pays an initial price (PV) for a bond or loan and receives a single principal cash flow ( $F V$ ) at maturity. The difference ( $F V-$ $P V)$ represents the interest earned over the life of the instrument.
- Periodic Interest: An investor pays an initial price (PV) for a bond or loan and receives interest cash flows (PMT) at pre-determined intervals over the life of the instrument, with the final interest payment and the principal (FV) paid at maturity.
- Level Payments: An investor pays an initial price (PV) and receives uniform cash flows at pre-determined intervals $(A)$ through maturity which represent both interest and principal repayment.


## Discount Instruments

The discount cash flow pattern is shown in Exhibit 1:

Exhibit 1: Discount Bond Cash Flows
![](https://cdn.mathpix.com/cropped/2025_06_02_c61a59718bee14cffd90g-02.jpg?height=622&width=1115&top_left_y=1543&top_left_x=348)

The present value ( $P V$ ) calculation for a discount bond with principal ( $F V$ ) paid at time $t$ with a market discount rate of $r$ per period is:

$$
P V(\text { Discount Bond })=F V_{t} /(1+r)^{t} .
$$

The investor's sole source of return is the difference between the price paid $(P V)$ and full principal ( $F V$ ) received at maturity. This type of bond is often referred to as a zero-coupon bond given the lack of intermediate interest cash flows, which for bonds are generally referred to as coupons.

## EXAMPLE 1

## Discount Bonds under Positive and Negative Interest Rates

While most governments issue fixed coupon bonds with principal paid at maturity, for many government issuers such as the United States, United Kingdom, or India, investors buy and sell individual interest or principal cash flows separated (or stripped) from these instruments as discount bonds. Consider a single principal cash flow payable in 20 years on a Republic of India government bond issued when the YTM is 6.70 percent. For purposes of this simplified example, we use annual compounding, that is, $t$ in Equation 5 is equal to the number of years until the cash flow occurs.

1. What should an investor expect to pay for this discount bond per INR100 of principal?

## Solution:

INR27.33
We solve for $P V$ given $r$ of 6.70 percent, $t=20$, and $F V_{20}$ of INR100 using Equation 5:

$$
P V=\operatorname{INR} 100 /(1+0.067)^{20}=\operatorname{INR} 27.33 .
$$

We may also use the Microsoft Excel or Google Sheets PV function:

```
= PV (rate, nper, pmt, FV, type),
```

where:
rate $=$ the market discount rate per period,
nper $=$ the number of periods,
$p m t=$ the periodic coupon payment (zero for a discount bond),
$F V=$ future or face value, and
type $=$ payments made at the end (0 as in this case) or beginning (1) of each period.

As a cash outflow (or price paid), the Excel PV solution has a negative sign, so:

$$
P V=(27.33)=\mathrm{PV} \quad(0.067,20,0,100,0) .
$$

While the principal ( $F V$ ) is a constant INR100, the price ( $P V$ ) changes as both time passes, and interest rates change.
2. If we assume that interest rates remain unchanged, what is the price $(P V)$ of the bond in three years' time?

## Solution:

INR33.21

Solve for $P V$ by substituting $t=17$ into the prior calculation using Equation 5:
$P V=\operatorname{INR} 100 /(1+0.067)^{17}=\operatorname{INR} 33.21$.
The INR5.88 price increase with a constant $r$ represents implied interest earned over the three years. If the interest rate is positive, the $P V$ generally rises (or accretes) over time to reach $F V$ as time passes and $t$ approaches zero.
3. Prices also change as interest rates change. Suppose after purchase at $t=$ 0 we observe an immediate drop in the bond price to INR22.68224 per INR100 of principal. What is the implied interest rate on the discount bond?

## Solution:

7.70 percent

Here we may solve for $r$ in Equation 5 as follows:

$$
\text { INR22.68224 }=\text { INR100 } /(1+r)^{20} .
$$

Rearranging Equation 5, we get:

$$
r=7.70 \text { percent }=(100 / 22.68224)^{1 / 20}-1 .
$$

Alternatively, we may use the Microsoft Excel or Google Sheets RATE function:
= RATE (nper, pmt, PV, FV, type, guess) using the same arguments as above, with guess as an optional estimate argument, which must be between 0 and 1 and defaults to 0.1 , as follows:

```
7.70 percent = RATE (20,0,-22.68224,100,0,0.1).
```

This shows that a 100 basis point ( 1.00 percent) increase in $r$ results in an INR4.65 price decrease, underscoring the inverse relationship between price and YTM.
4. Now consider a bond issued at negative interest rates. In July 2016, Germany became the first eurozone country to issue 10-year sovereign bonds at a negative yield. If the German government bond annual YTM was -0.05 percent when issued, calculate the present value (PV) of the bond per EUR100 of principal ( $F V$ ) at the time of issuance.

## Solution:

EUR100.50
Solve for $P V$ given $r$ of -0.05 percent, $t=10$, and $F V_{10}$ of EUR100 using Equation 1:

$$
P V=\text { EUR } 100.50=\text { EUR } 100 /(1-0.0005)^{10},
$$

or

$$
P V=(100.50)=P V \quad(-0.0005,10,0,100,0) .
$$

At issuance, this bond is priced at a premium, meaning that an investor purchasing the bond at issuance paid EUR0.50 above the future value expected at maturity, which is the principal.
5. Six years later, when German inflation reached highs not seen in decades and investors increased their required nominal rate of return, say we observed that the German government bond in question 4 is now trading at
a price (PV) of EUR95.72 per EUR100 principal. What is the YTM on this bond?

## Solution:

1.10 percent

Use Equation 5 to solve for $r$ given a $P V$ of 95.72, $F V$ of 100, and $t=4$, we get:
EUR95.72 $=$ EUR100 $/(1+r)^{4} ; r=1.10 \%$, or
$1.10 \%=\operatorname{RATE}(4,0,-95.72,100,0,0.1)$.
In the case of the Republic of India discount bond, a higher interest rate will reduce the bond's price. However, in contrast to the accreting price of a discount bond, the premium bond's price will decline (or amortize) over time to reach the EUR100 future value at maturity.

## Coupon Instrument

A periodic cash flow pattern for fixed-income interest payments with principal repaid at maturity is shown in Exhibit 2. In this case, all the periodic cash flow payments are identical and occur on a semiannual basis.

Exhibit 2: Coupon Bond Cash Flows
![](https://cdn.mathpix.com/cropped/2025_06_02_c61a59718bee14cffd90g-05.jpg?height=784&width=1099&top_left_y=1256&top_left_x=670)

Pricing a coupon bond extends the single cash flow calculation for a discount bond to a general formula for calculating a bond's price ( $P V$ ) given the market discount rate on a coupon date, as follows:

$$
\begin{aligned}
& P V(\text { Coupon Bond }) \\
& =P M T_{1} /(1+r)^{1}+P M T_{2} /(1+r)^{2}+\ldots+\left(P M T_{N}+F V_{N}\right) /(1+r)^{N}
\end{aligned}
$$

## EXAMPLE 2

## Hellenic Republic of Greece Annual Coupon Bond

At the height of the COVID pandemic, the government of Greece issued a 2 percent annual coupon bond maturing in seven years.

1. If the observed YTM at issuance was 2.00 percent, what was the issuance price (PV) per EUR100 of principal?

## Solution:

## EUR100

Solve for $P V$ using Equation 6 with $P M T_{i}=$ EUR2, $r=2.00 \%$, and $F V=$ EUR100:
$P V=\mathrm{EUR} 100$
$=\frac{2}{1.02}+\frac{2}{1.02^{2}}+\frac{2}{1.02^{3}}+\frac{2}{1.02^{4}}+\frac{2}{1.02^{5}}+\frac{2}{1.02^{6}}+\frac{2}{1.02^{7}}$.
We may solve this using the Microsoft Excel or Google Sheets PV function introduced earlier ( $P V(0.02,7,2,100,0)$ ). The issuance price equals the principal ( $P V=F V$ ). This relationship holds on a coupon date for any bond where the fixed periodic coupon is equal to the discount rate.
The present value of each cash flow may be solved using Equation 5. For example, the final EUR102 interest and principal cash flow in seven years is:
$P V=\mathrm{EUR} 88.80=\mathrm{EUR} 102 /(1.02)^{7}$.
The following table shows the present value of all bond cash flows:

| Years/Periods | $\mathbf{0}$ | $\mathbf{1}$ | $\mathbf{2}$ | $\mathbf{3}$ | $\mathbf{4}$ | $\mathbf{5}$ | $\mathbf{6}$ | $\mathbf{7}$ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| FV |  | 2 | 2 | 2 | 2 | 2 | 2 | 102 |
| PV | 100.00 | 1.96 | 1.92 | 1.88 | 1.85 | 1.81 | 1.78 | 88.80 |

2. Next, let's assume that, exactly one year later, a sharp rise in Eurozone inflation drove the Greek bond's price lower to EUR93.091 (per EUR100 of principal). What would be the implied YTM expected by investors under these new market conditions?

## Solution:

3.532 percent

In this case, we must solve for $r$ using Equation 6, with $P V$ equal to 93.091, as follows:

$$
P V=93.091=2 /(1+r)+2 /(1+r)^{2}+2 /(1+r)^{3}+2 /(1+r)^{4}+102 /(1+r)^{5}
$$

Here we may use the Microsoft Excel or Google Sheets RATE function (RATE $(5,2,93.091,100,0,0.1))$ to solve for $r$ of 3.532 percent. Investors in fixed coupon bonds face a capital loss when investors expect a higher YTM.

The interest rate $r$ used to discount all cash flows in Equation 6 is the bond's YTM, which is typically quoted on an annual basis. However, many bonds issued by public or private borrowers pay interest on a semiannual basis. In Example 3, we revisit the Republic of India bond from which a single cash flow was stripped in an earlier simplified example.

## EXAMPLE 3

## Republic of India Semiannual Coupon Bond

Consider the 20-year Republic of India government bond from which the discount bond in Example 1 was separated (or stripped). The bond was issued at an annualized coupon rate of 6.70 percent and a YTM of 6.70 percent, and the coupon payments are semiannual.

1. Solve for the price of the bond at issuance.

## Solution:

INR100
As coupon periods are semiannual, for a principal of INR100, $P M T=$ INR3.35 (=6.70/2) and the periodic discount rate is 3.35 percent (=6.70 percent/2), as follows:

$$
\begin{aligned}
& P V=3.35 /(1.0335)+3.35 /(1.0335)^{2}+\ldots+3.35 /(1.0335)^{39}+103.35 / \\
& (1.0335)^{40} .
\end{aligned}
$$

As shown in Example 2, because the coupon rate is equal to the YTM, we expect this bond to have a $P V$ of INR100 at issuance.
2. What is the bond's price if the YTM immediately rises to 7.70 percent?

## Solution:

INR89.88
We can solve for the $P V$ as INR89.88 using Equation 6 with $r=3.85 \%$ (=7.70/2) or using the Microsoft Excel or Google Sheets PV function (PV $(0.0385,40,3.35,100,0))$. The first and final three cash flows are shown below:

| r | Years | 0 | 0.5 | 1 | 1.5 | 19 | 19.5 | 20 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
|  | Periods | 0 | 1 | 2 | 3 | 38 | 39 | 40 |
| 6.70\% <br> 7.70\% | FV |  | 3.35 | 3.35 | 3.35 | 3.35 | 3.35 | 103.35 |
|  | PV | 100.00 | 3.24 | 3.14 | 3.03 | 0.96 | 0.93 | 27.66 |
|  | PV | 89.88 | 3.23 | 3.11 | 2.99 | 0.80 | 0.77 | 22.81 |

3. Recalculate the discount bond price for the final principal payment in 20 years from Example 1 using a 6.70 percent semiannual discount rate.

## Solution:

## INR26.77

Note that the PV calculation using the same annual discount rate for 40 semiannual periods will differ slightly using Equation 5, as follows:
$P V=\operatorname{INR} 27.66=\left(P M T_{40}+F V_{40}\right) /(1+r / 2)^{40}$,
$P V\left(P M T_{40}\right)=$ INR $0.90=3.35 /(1.0335)^{40}$,
$P V\left(F V_{40}\right)=$ INR26.77 $=100 /(1.0335)^{40}$.
Compounding on a semiannual basis for 40 periods, $P V\left(F V_{40}\right)$ of 26.77 is less than the original PV of 27.33 using 20 annual periods from Example 1 (since $1 /(1+r)^{t}>1 /(1+r / 2)^{2 t}$ when $r \geq 0$ ).

A perpetual bond is a less common type of coupon bond with no stated maturity date. Most perpetual bonds are issued by companies to obtain equity-like financing and often include redemption features. As $N \rightarrow \infty$ in Equation 6, we can simplify this to solve for the present value of a perpetuity (or perpetual fixed periodic cash flow without early redemption), where $r>0$, as follows:

$$
P V(\text { Perpetual Bond })=P M T / r .
$$

## EXAMPLE 4

## KB Financial Perpetual Bond

In 2020, KB Financial (the holding company for Kookmin Bank) issued KRW325 billion in perpetual bonds with a 3.30 percent quarterly coupon.

1. Calculate the bond's YTM if the market price was KRW97.03 (per KRW100).

## Solution:

3.40 percent

Solve for $r$ in Equation 7 given a $P V$ of KRW97.03 and a periodic quarterly coupon (PMT) of KRW0.825 (= $(3.30 \% \times \mathrm{KRW} 100) / 4)$ :

KRW97.03 $=$ KRW0.825 $/ r$;
$r=0.85 \%$ per period, or $3.40 \%(=0.85 \% \times 4)$ on an annualized basis.

## Annuity Instruments

Examples of fixed-income instruments with level payments, which combine interest and principal cash flows through maturity, include fully amortizing loans such as mortgages and a fixed-income stream of periodic cash inflows over a finite period known as an annuity. Exhibit 3 illustrates an example of level monthly cash flows based upon a mortgage.

## Exhibit 3: Mortgage Cash Flows

![](https://cdn.mathpix.com/cropped/2025_06_02_c61a59718bee14cffd90g-08.jpg?height=698&width=1004&top_left_y=1814&top_left_x=403)

We may calculate the periodic annuity cash flow ( $A$ ), which occurs at the end of each respective period, as follows:

$$
A=\frac{r(P V)}{1-(1+r)^{-t}},
$$

where:

$$
\begin{aligned}
A & =\text { periodic cash flow, } \\
r & =\text { market interest rate per period, } \\
P V & =\text { present value or principal amount of loan or bond, and } \\
t & =\text { number of payment periods. }
\end{aligned}
$$

## EXAMPLE 5

## Mortgage Cash Flows

An investor seeks a fixed-rate 30-year mortgage loan to finance 80 percent of the purchase price of USD1,000,000 for a residential building.

1. Calculate the investor's monthly payment if the annual mortgage rate is 5.25 percent.

## Solution:

Solve for $A$ using Equation 8 with $r=0.4375 \%(=5.25 \% / 12), t$ of 360 , and $P V$ of USD800,000 (=80\% × USD1,000,000):

$$
A=U S D 4,417.63=\frac{0.4375 \%(\mathrm{USD} 800,000)}{1-(1+0.4375 \%)^{-360}} .
$$

The 360 level monthly payments consist of both principal and interest.
2. What is the principal amortization and interest breakdown of the first two monthly cash flows?

## Solution:

Month 1 interest is USD3,500 and principal is USD917.63
Month 2 interest is USD3,495.99 and principal is USD921.64

## Month 1:

$$
\begin{aligned}
& \text { Interest: USD3,500 = USD800,000 } \times 0.4375 \%\left(=P V_{0} \times r\right) \\
& \text { Principal Amortization: USD4,417.63 - USD3,500 = USD917.63 } \\
& \text { Remaining Principal }\left(P V_{1}\right): \text { USD799,082.37 = USD800,000 } \\
& \text { - USD917.63 }
\end{aligned}
$$

Month 2:

```
Interest: USD3,495.99 = USD799,082.37 x 0.4375% (=PV 1 x r)
Principal Amortization: USD4,417.63 - USD3,495.99 = USD921.64
Remaining Principal (PV2): USD798,160.73 = USD799,082.37
- USD921.64
```

Although the periodic mortgage payment is constant, the proportion of interest per payment declines while the principal amortization rises over
time. The following spreadsheet shows the first and final three monthly cash flows.

| Month | Total Monthly Payment | Monthly Interest Payment | Monthly Principal Repayment | Remaining Principal |
| :--- | :--- | :--- | :--- | :--- |
| 1 | \$ 4,417.63 | \$ 3,500.00 | \$ 917.63 | \$ 799,082.37 |
| 2 | \$ 4,417.63 | \$ 3,495.99 | \$ 921.64 | \$ 798,160.73 |
| 3 | \$ 4,417.63 | \$ 3,491.95 | \$ 925.68 | \$ 797,235.05 |
| ... |  |  |  |  |
| 358 | \$ 4,417.63 | \$ 57.48 | \$ 4,360.15 | \$ 8,777.61 |
| 359 | \$ 4,417.63 | \$ 38.40 | \$ 4,379.23 | \$ 4,398.39 |
| 360 | \$ 4,417.63 | \$ 19.24 | \$ 4,398.39 | \$ 0.00 |

## Equity Instruments and the Time Value of Money

Equity investments, such as preferred or common stock, represent ownership shares in a company which entitle investors to receive any discretionary cash flows in the form of dividends. Unlike fixed-income instruments, equity investments have no maturity date and are assumed to remain outstanding indefinitely, or until a company is sold, restructured, or liquidated. One way to value a company's shares is by discounting expected future cash flows using an expected rate of return ( $r$ ). These cash flows include any periodic dividends received plus the expected price received at the end of an investment horizon.

Common assumptions associated with valuing equity instruments based upon dividend cash flows often follow one of three general approaches:

- Constant Dividends: An investor pays an initial price ( $P V$ ) for a preferred or common share of stock and receives a fixed periodic dividend $(D)$.
- Constant Dividend Growth Rate: An investor pays an initial price (PV) for a share of stock and receives an initial dividend in one period ( $D_{t+1}$ ), which is expected to grow over time at a constant rate of $g$.
- Changing Dividend Growth Rate: An investor pays an initial price $(P V)$ for a share of stock and receives an initial dividend in one period ( $D_{t+1}$ ). The dividend is expected to grow at a rate that changes over time as a company moves from an initial period of high growth to slower growth as it reaches maturity.

The simplest case of a stock that is assumed to pay constant dividends in perpetuity is shown in Exhibit 4.

## Exhibit 4: Equity Cash Flows with Constant Dividends

![](https://cdn.mathpix.com/cropped/2025_06_02_c61a59718bee14cffd90g-11.jpg?height=454&width=1058&top_left_y=323&top_left_x=688)

The price of a preferred or common share expected to pay a constant periodic dividend is an infinite series that simplifies to the formula for the present value of a perpetuity shown and is similar to the valuation of a perpetual bond that we encountered earlier. Specifically, the valuation in Equation 7:

$$
\begin{aligned}
& P V_{t}=\sum_{i=1}^{\infty} \frac{D_{t}}{(1+r)^{i}} \text {, and } \\
& P V_{t}=\frac{D_{t}}{r}
\end{aligned}
$$

## EXAMPLE 6

## Constant Dividend Cash Flows

Shipline PLC is a company that pays regular dividends of GBP1.50 per year, which are expected to continue indefinitely.

1. What is Shipline's expected stock price if shareholders' required rate of return is 15 percent?

## Solution:

GBP10
Solve for $P V$ using Equation 10, where $D$ is GBP1.50 and the rate of return per period $r$ is 15 percent:
$P V=\mathrm{GBP} 10.00=\mathrm{GBP} 1.50 / 0.15$.

Alternatively, a common equity forecasting approach is to assume a constant dividend growth rate $(g)$ into perpetuity, as illustrated in Exhibit 5.

Exhibit 5: Equity Cash Flows with Constant Dividend Growth
![](https://cdn.mathpix.com/cropped/2025_06_02_c61a59718bee14cffd90g-12.jpg?height=663&width=971&top_left_y=330&top_left_x=420)

If dividends grow at a rate of $g$ per period and are paid at the end of each period, the next dividend (at time $t+1$ ) may be shown as follows:

$$
D_{t+1}=D_{t}(1+g),
$$

or generally in $i$ periods as:

$$
D_{t+i}=D_{t}(1+g)^{i} .
$$

If dividend cash flows continue to grow at $g$ indefinitely, then we may rewrite Equation 10 as follows:

$$
P V_{t}=\sum_{i=1}^{\infty} \frac{D_{t}(1+g)^{i}}{(1+r)^{i}},
$$

which simplifies to:

$$
P V_{t}=\frac{D_{t}(1+g)}{r-g}=\frac{D_{t+1}}{r-g},
$$

where $r-g>0$.
An alternative to constant dividend growth is an assumption of changing growth. This is common for evaluating the share price of firms expected to experience an initial rapid rise in cash flow, followed by slower growth as a company matures. The simplest form of changing dividend growth is the two-stage model shown in Exhibit 6.

Exhibit 6: Equity Cash Flows with Two-Stage Dividend Growth
![](https://cdn.mathpix.com/cropped/2025_06_02_c61a59718bee14cffd90g-13.jpg?height=885&width=972&top_left_y=327&top_left_x=731)

The example in Exhibit 6 shows a company with an initial higher short-term dividend growth of $g_{s}$ for the first three years, followed by lower long-term growth $\left(g_{l}\right.$, where $g_{s}>g_{l}$ ) indefinitely thereafter. If we generalize the initial growth phase to $n$ periods followed by indefinite slower growth at $g_{l}$, we obtain a modified version of Equation 14 as follows:

$$
P V_{t}=\sum_{i=1}^{n} \frac{D_{t}\left(1+g_{s}\right)^{i}}{(1+r)^{i}}+\sum_{j=n+1}^{\infty} \frac{D_{t+n}\left(1+g_{l}\right)^{j}}{(1+r)^{j}} .
$$

Note that the second expression in Equation 15 involves constant growth starting in $n$ periods, for which we can substitute the geometric series simplification:

$$
P V_{t}=\sum_{i=1}^{n} \frac{D_{t}\left(1+g_{s}\right)^{i}}{(1+r)^{i}}+\frac{E\left(S_{t+n}\right)}{(1+r)^{n}},
$$

where the stock value of the stock in n periods ( $E\left(S_{t+n}\right)$ is referred to as the terminal value) and is equal to the following:

$$
E\left(S_{t+n}\right)=\frac{D_{t+n+1}}{r-g_{l}} .
$$

We revisit the Shipline PLC stock price example to evaluate the effects of constant dividend, constant dividend growth and changing dividend growth assumptions on a company's expected share price.

## EXAMPLE 7

## Constant and Changing Dividend Growth

Recall that based on a constant GBP1.50 annual dividend and required return of 15 percent, we showed Shipline PLC's expected stock price to be GBP10.00. Suppose instead that an investment analyst assumes that Shipline will grow its annual dividend by 6 percent per year indefinitely.

1. How does Shipline's expected share price change under the analyst's constant growth assumption?

## Solution:

GBP17.67
Using Equation 14, solve for $P V$ using $D_{t+1}$ of GBP1.59 (=GBP1.50 $\times(1+$ $0.06)$ ), $r$ of $15 \%$, and $g$ of $6 \%$ :

$$
P V=\mathrm{GBP} 1.59 /(15 \%-6 \%)=\mathrm{GBP} 17.67
$$

Note that a higher growth rate $g$ increases the $P V$ by reducing the denominator ( $r-g$ ).
2. How does Shipline's expected share price change if we assume instead an initial dividend growth of 6 percent over a three-year period followed by constant 2 percent dividend growth thereafter?

## Solution:

GBP13.05
We may solve for Shipline's expected share price ( $P V$ ) using Equations $15-17$ and $D_{t}=1.5, g_{s}=6 \%, n=3, \mathrm{r}=15 \%$, and $g_{l}=2 \%$, as follows:

$$
P V_{t}=\sum_{i=1}^{3} \frac{1.50(1+0.06)^{i}}{(1+0.15)^{i}}+\sum_{j=4}^{\infty} \frac{D_{t+3}(1+0.02)^{j}}{(1+0.15)^{j}}
$$

As a first step, we calculate the present value of dividends associated with the higher 6 percent growth rate over the first three years as shown in the first expression. As a second step, we calculate the present value of future dividends at a lower 2 percent growth rate for an indefinite period. The sum of these two steps is the expected share price.

Step 1 Solve for the first step as GBP3.832 with dividend cash flows for the initial growth period as shown in the following spreadsheet:

| $\boldsymbol{t}$ | $\boldsymbol{D}$ | $\boldsymbol{P V}(\boldsymbol{D})$ at $\boldsymbol{r} \%$ |
| :--- | :---: | :---: |
| 0 | 1.500 |  |
| 1 | 1.590 | 1.383 |
| 2 | 1.685 | 1.274 |
| 3 | 1.787 | 1.175 |
| $P V(S T$ growth $)$ |  | 3.832 |

Step 2 As shown in Equation 17, the second expression simplifies as follows: $\frac{E\left(S_{4}\right)}{(1+r)^{3}}$; with $E\left(S_{4}\right)=\frac{D_{4}}{r-g_{l}}$.

We may solve for $D_{4}$ as GBP1.894 $\left(=1.787 \times 1.02=D_{3}\left(1+g_{l}\right)\right)$ and the second expression to be GBP9.22 as follows:

$$
\text { GBP9.22 }=\frac{1.894 /(0.15-0.02)}{(1.15)^{3}}
$$

Step 3 The sum of these two steps gives us an expected Shipline share price of GBP13.05 (=3.83 + 9.22).
In the following table, we show the sensitivity of Shipline's expected share price $(P V)$ to changes in the long-term growth rate $\left(g_{l}\right)$ after three years of 6 percent dividend growth:

| Share Price | LT Growth Rate |
| :---: | :---: |
| 11.66 | $0 \%$ |
| 13.05 | $2 \%$ |
| 14.94 | $4 \%$ |
| 17.67 | $6 \%$ |

calculate and interpret the implied return of fixed-income instruments and required return and implied growth of equity instruments given the present value (PV) and cash flows

Lesson 1 addressed the time value of money trade-off between cash flows occurring today versus those in the future for certain fixed income and equity instruments. Market participants often face a situation in which both the present and future values of instruments or cash flows may be known. In this case it becomes possible to solve for the implied return or growth rate implied by the current price and features of the future cash flows. In this sense, solving for the implied growth or return provides a view of the market expectations that are incorporated into the market price of the asset.

## Implied Return for Fixed-Income Instruments

Fixed-income instruments are characterized by contractual interest and principal cash flows. If we observe the present value (or price) and assume that all future cash flows occur as promised, then the discount rate (r) or yield-to-maturity (YTM) is a measure of implied return under these assumptions for the cash flow pattern.

In the case of a discount bond or instrument, recall that an investor receives a single principal cash flow $(F V)$ at maturity, with $(F V-P V)$ representing the implied return, as shown in Exhibit 7.

