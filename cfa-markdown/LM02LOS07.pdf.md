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

Exhibit 7: Discount Bond Implied Return
![](https://cdn.mathpix.com/cropped/2025_06_02_4575e1e25ad78d569db3g-02.jpg?height=622&width=1077&top_left_y=323&top_left_x=367)

We may rearrange Equation 5 from to solve for the implied periodic return earned over the life of the instrument ( $t$ periods):

$$
r=\sqrt[t]{\frac{F V_{t}}{P V}}-1=\left(\frac{F V_{t}}{P V}\right)^{\frac{1}{t}}-1
$$

## EXAMPLE 8

## Discount Bond Implied Return

Recall from Example 1 that in 2016, German 10-year government bond investors faced a price of EUR100.50 per EUR100 principal and an annual YTM of -0.05 percent at issuance. That is, the German 10-year government bond was initially priced by the market to provide a negative return to the investor. Six years later, these bonds traded at a price (PV) of EUR95.72 per EUR100 principal.

1. What was the initial investor's implied return on this bond over the six-year holding period?

## Solution:

-0.81 percent
We can solve for an investor's annualized return ( $r$ ) using Equation 18 and a $P V$ of 100.5, FV of 95.72, and $t$ of 6 as follows:

$$
r=-0.81 \%=\left(\frac{95.72}{100.5}\right)^{\frac{1}{6}}-1 .
$$

Note that an investor who purchases the discount bond at issuance and receives EUR100 in 10 years expects an implied return equal to the issuance YTM of -0.05 percent. However, the EUR4.78 price decline for the first six years translates into an annualized return of -0.81 percent, which is below the initial YTM of -0.05 percent. This negative return is consistent with an expected decline in the price $(P V)$ of a discount bond amid higher inflation.
2. What is the expected return of an investor who purchases the discount bond at EUR95.72 and holds it for the remaining four years?

## Solution:

1.10 percent

Here the current price of 95.72 in Equation 18 is now the $P V$, and the principal of 100 is $F V$, with $t=4$ :

$$
r=1.10 \%=\left(\frac{100}{95.72}\right)^{\frac{1}{4}}-1
$$

Note that $r$ of 1.10 percent is equal to the YTM for the remaining four years we derived in Example 1. The cumulative returns across the two investors is equal to the initial -0.05 percent YTM, assuming no transaction costs as follows:

$$
-0.05 \%=\left[(1-0.0081)^{6} \times(1+0.011)^{4}\right]^{\frac{1}{10}}-1
$$

These relationships are summarized in the following diagram:
![](https://cdn.mathpix.com/cropped/2025_06_02_4575e1e25ad78d569db3g-03.jpg?height=754&width=636&top_left_y=1000&top_left_x=899)

Unlike discount bonds, fixed-income instruments that pay periodic interest have cash flows throughout their life until maturity. The uniform discount rate (or internal rate of return) for all promised cash flows is the YTM, a single implied market discount rate for all cash flows regardless of timing as shown for a coupon bond in Exhibit 8.

Exhibit 8: Coupon Bond Implied Return
![](https://cdn.mathpix.com/cropped/2025_06_02_4575e1e25ad78d569db3g-04.jpg?height=790&width=1099&top_left_y=326&top_left_x=356)

The YTM assumes an investor expects to receive all promised cash flows through maturity and reinvest any cash received at the same YTM. For coupon bonds, this involves periodic interest payments only, while for level payment instruments such as mortgages, the calculation assumes both interest and amortized principal may be invested at the same rate. Like other internal rates of return, the YTM cannot be solved using an equation, but it may be calculated using iteration with a spreadsheet or calculator, a process that solves for $r$ in Equation 19, as follows:

PV(Coupon Bond)

$$
=P M T_{1} /(1+r)^{1}+P M T_{2} /(1+r)^{2}+\ldots+\left(P M T_{N}+F V_{N}\right) /(1+r)^{N},
$$

where $F V$ equals a bond's principal and N is the number of periods to maturity.
The Microsoft Excel or Google Sheets YIELD function can be used to calculate YTM for fixed-income instruments with periodic interest and full principal payment at maturity:

```
= YIELD (settlement, maturity, rate, pr, redemption,
frequency, [basis])
```

where:

```
settlement = settlement date entered using the DATE function;
    maturity = maturity date entered using the DATE function;
        rate = semi-annual (or periodic) coupon;
            pr = price per 100 face value;
redemption = future value at maturity;
frequency = number of coupons per year; and
[basis] = day count convention, typically 0 for US bonds (30/360 day count).
```

Example 9 illustrates the implied return on fixed income instruments with periodic interest.

## EXAMPLE 9

## Greek Coupon Bond Implied Return

Recall from Example 2 that seven-year Greek government bonds issued in 2020 with a 2.00 percent annual coupon had a price of EUR93.091 per EUR100 principal two years later.

1. What is the implied two-year return for an investor able to reinvest periodic interest at the original YTM of 2.00 percent?

## Solution:

-1.445 percent
Using Equation 18 as for the discount bond, we must first calculate the future value $(F V)$ after two years including the future price of 93.091 and all cash flows reinvested to that date:

$$
\begin{aligned}
& F V_{2}=P M T_{1}(1+r)+P M T_{2}+P V_{2} \\
& F V_{2}=97.13=2 \times(1.02)+2+93.091 \\
& r=-1.445 \%=\left(\frac{97.13}{100}\right)^{\frac{1}{2}}-1
\end{aligned}
$$

This negative annualized return was due to a EUR6.91 (=100-93.091) capital loss which exceeded the periodic interest plus reinvestment proceeds of EUR4.04 ( $=2 \times(1.02)+2$ ). The fall in the price of the bond to EUR93.091 in 2022 was a result of a rise in Eurozone inflation over the period.
For an investor purchasing the 2 percent coupon bond in 2022 at a price of EUR93.091, recall that we solved for an $r$ (or YTM) of 3.532 percent. Note that this YTM calculation for the remaining five years assumes all cash flows can be reinvested at 3.532 percent through maturity. The rate(s) at which periodic interest can be reinvested is critical for the implied return calculation for coupon bonds as shown below. YTM is computed assuming that the bond is held to maturity.
![](https://cdn.mathpix.com/cropped/2025_06_02_4575e1e25ad78d569db3g-06.jpg?height=1072&width=1240&top_left_y=223&top_left_x=285)

## Equity Instruments, Implied Return, and Implied Growth

As noted in the discussion of calculating the present value of an equity investment, the price of a share of stock reflects not only the required return but also the growth of cash flows. If we begin with an assumption of constant growth of dividends from Equation 14, we can rearrange the formula as follows:

$$
r-g=\frac{D_{t}(1+g)}{P V_{t}}=\frac{D_{t+1}}{P V_{t}}
$$

The left-hand side of Equation 20 simply reflects the difference between the required return and the constant growth rate, and the right-hand side is the dividend yield of the stock based on expected dividends over the next period. Thus, the implied return on a stock given its expected dividend yield and growth is given by Equation 21, as follows:

$$
r=\frac{D_{t}(1+g)}{P V_{t}}+g=\frac{D_{t+1}}{P V_{t}}+g .
$$

Simply put, if we assume that a stock's dividend grows at a constant rate in perpetuity, the stock's implied return is equal to its expected dividend yield plus the constant growth rate.

Alternatively, we may be interested in solving for a stock's implied growth rate, and this relation is given by Equation 22:

$$
g=\frac{r^{*} P V_{t}-D_{t}}{P V_{t}+D_{t}}=r-\frac{D_{t+1}}{P V_{t}} .
$$

If a stock's next expected dividend is known, then we can calculate the implied growth by deducting its expected dividend yield from its required return.

## EXAMPLE 10

## Implied Return and Growth for a Stock

Coca-Cola Company stock trades at a share price of USD63.00 and its annualized expected dividend per share during the next year is USD1.76.

1. If an analyst expects Coca-Cola's dividend per share to increase at a constant 4 percent per year indefinitely, calculate the required return expected by investors.

## Solution:

6.79 percent

Using Equation 21,
$r=\frac{1.76}{63}+0.04=0.0679$.
The required return expected for Coca-Cola stock is 6.79 percent given its current price, expected dividend, and expected dividend growth rate. Investor expectations of future stock returns are inferred by the combination of the current price, expected future cash flows and the cash flow growth rate. Suppose that, instead of attempting to estimate the required return, an investor wishes to determine an implied dividend growth rate. In this case, the investor must assume a future stock return, as in question 2.
2. If the analyst believes that Coca-Cola stock investors should expect a return of 7 percent, calculate the implied dividend growth rate for Coca-Cola.

## Solution:

4.21 percent

Using Equation 22,
$g=0.07-\frac{1.76}{63}=0.0421$.
The implied dividend growth rate for Coca-Cola stock is 4.21 percent given its expected return, price, and expected dividend. Given that a higher expected return is assumed in this question compared to the case in question 1, the result is a higher implied dividend growth rate to justify Coca-Cola's stock price of USD63.00.

Rather than comparing equity share prices directly in currency terms, a common practice is to compare ratios of share price to earnings per share, or the price-to-earnings ratio.

## PRICE-TO-EARNINGS RATIO

Price-to-earnings ratio is a relative valuation metric that improves comparability by controlling for a known driver of value (earnings per share) as well as currency. It is analogous to expressing the price of real estate using a price per square meter.

A stock trading at a price-to-earnings ratio of 20 implies that its share price is 20 times its earnings per share and investors are willing to pay 20 times earnings per share for each share traded, which is more expensive than a stock trading at a price to earnings ratio of 10 .

Price-to-earnings ratios not only are used for individual stocks but also are a valuation metric for stock indexes, such S\&P 500, FTSE 100, or Nikkei 225. Here, the stock index value is divided by a weighted sum of the index constituents' earnings per share. This will be explored in depth later in the curriculum, but we can relate the price-to-earnings ratio to our earlier discussion of relating a stock's price $(P V)$ to expected future cash flows to make some useful observations. First, recall Equation 14:

$$
P V_{t}=\frac{D_{t}(1+g)}{r-g} .
$$

We can divide both sides by $E_{t}$, earnings per share for period $t$, to obtain:

$$
\frac{P V_{t}}{E_{t}}=\frac{\frac{D_{t}}{E_{t}} \times(1+g)}{r-g} .
$$

The left-hand side of Equation 23 is the price-to-earnings ratio, whereas the first term in the numerator on the right is the proportion of earnings distributed to shareholders as dividends known as the dividend payout ratio.

Given a price-to-earnings ratio and dividend payout ratio, we can solve for either required return or implied dividend growth rate (given an assumption about the other). The required return is useful in understanding investor return expectations on a forward-looking basis. The implied constant growth rate is useful to compare with the company's expected growth rate and historical growth rate. For example, if the implied constant growth rate is 10 percent yet the analyst estimates that the company can only grow by 5 percent, the analyst may judge the shares to be overvalued.

In practice, the forward price-to-earnings ratio or ratio of its share price to an estimate of its next period ( $t+1$ ) earnings per share is commonly used. With it, we can simplify the previous equation as follows:

$$
\frac{P V_{t}}{E_{t+1}}=\frac{\frac{D_{t+1}}{E_{t+1}}}{r-g}
$$

From Equation 24, we can see that forward price-to-earnings ratio is positively related to higher expected dividend payout ratio and higher expected growth but is negatively related to the required return.

## EXAMPLE 11

## Implied Return and Growth from Price to Earnings Ratio

1. Suppose Coca-Cola stock trades at a forward price to earnings ratio of 28, its expected dividend payout ratio is 70 percent, and analysts believe that its dividend will grow at a constant rate of 4 percent per year. Calculate Co-ca-Cola's required return.

## Solution:

6.50 percent

Using Equation 24,

$$
28=\frac{0.7}{r-0.04}
$$

Solving this equation for r , Coca-Cola's required return is 6.50 percent. Given the above result for Coca-Cola's required return, it should come as no surprise that if we instead assume that the required return on Coca-Cola stock is 6.50 percent, then we would find that Coca-Cola's implied growth rate is 4 percent, and this result is confirmed in question 2.
2. Suppose Coca-Cola stock trades at a forward price to earnings ratio of 28, its expected dividend payout ratio is 70 percent, and analysts believe that its required return is 6.50 percent. Calculate Coca-Cola's implied growth rate.

## Solution:

4.00 percent

Using Equation 24,

$$
28=\frac{0.70}{0.065-g}
$$

Solving this equation for $g$, Coca-Cola's implied growth rate is 4.00 percent. In particular, Coca-Cola's return is expected to be 2.5 percent greater than its dividend growth rate (i.e., $6.50 \%-4.00 \%$ ).
As discussed earlier, the same principles apply to understanding required returns and growth rates on stock indexes.
3. A stock index is trading at a forward price to earnings ratio of 19. If the expected dividend payout ratio on the index is 60 percent, and equity investors expect an index rate of return of 8 percent, calculate the implied constant growth rate for the index.

## Solution:

4.84 percent

Using Equation 24:

$$
19=\frac{0.60}{0.08-g} .
$$

Solving for $g$, we find that investors expect the index's dividend growth rate to be 4.84 percent in the future. Alternatively, we could assume that investors expect a 4.84 percent growth rate and solve for $r$ to calculate 8 percent as the required return. Thus, the index forward price-to-earnings ratio of 19 and an expected dividend payout ratio of 60 percent combine to reflect expectations of 8 percent return and 4.84 percent growth. Specifically, the required return exceeds the implied dividend growth rate by 3.16 percent (i.e., $8 \%-4.84 \%$ ).

An important point from the prior results is that equity prices, whether expressed simply as price or as a price-to-earnings ratio, reflect combined expectations about future returns and growth. Expectations of returns and growth are linked together by the difference between $r$ and $g$. For example, the Coca-Cola example using a price-to-earnings ratio of 28 describes a situation in which investors must believe that the required return on Coca-Cola stock is 2.5 percent above its growth rate.
4. Suppose Coca-Cola stock trades at a forward price to earnings ratio of 28 and its expected dividend payout ratio is 70 percent. Analysts believe that Coca-Cola stock should earn a 9 percent return and that its dividends will grow by 4.50 percent per year indefinitely. Recommend a course of action for an investor interested in taking a position in Coca-Cola stock.

## Solution:

Take a short position in Coca-Cola stock.
If we evaluate the above parameters using Equation 24, we can see that this results in an inequality.

$$
28>\frac{0.70}{0.09-0.045}=15.56
$$

Coca-Cola's forward price-to-earnings ratio of 28 is much greater than 15.56, which is computed from the equation. Investor expectations of cash flow growth and return are inconsistent with Coca-Cola's forward price to earnings ratio. Specifically, an investor should consider a short position in Coca-Cola stock in the belief that its price should decline because its current price to earnings ratio is well above what its fundamentals imply. As shown in results for questions 1 and 2 in this example, expectations for the required return and growth rate must be such that $r-g=2.50 \%$ to justify a forward price-to-earnings ratio of 28 given the expected dividend payout ratio of 70 percent.

## CASH FLOW ADDITIVITY

explain the cash flow additivity principle, its importance for the no-arbitrage condition, and its use in calculating implied forward interest rates, forward exchange rates, and option values

The time value of money trade-off between cash flows occurring today versus those in the future may be extended beyond pricing future cash flows today or calculating the implied return on a single instrument using the cash flow additivity principle. Under cash flow additivity, the present value of any future cash flow stream indexed at the same point equals the sum of the present values of the cash flows. This principle is important in ensuring that market prices reflect the condition of no arbitrage, or that no possibility exists to earn a riskless profit in the absence of transaction costs.

Let's begin with a basic example to demonstrate the cash flow additivity principle.

EXAMPLE 12

## Basic Cash Flow Additivity

Let's assume that you have GBP100 to invest, and have two strategies from which to choose with the following cash flow streams as shown in Exhibit 9.

