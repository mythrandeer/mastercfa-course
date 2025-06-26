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

## Exhibit 9: Two Investment Strategies

![](https://cdn.mathpix.com/cropped/2025_06_02_764aa5679188af3f43dbg-02.jpg?height=619&width=979&top_left_y=333&top_left_x=725)

Your required return for both investment strategies is 10 percent per time period.

1. Recommend which investment strategy to choose.

## Solution:

To make a recommendation between these two strategies, we need to establish which one has the higher present value as well as whether either has a positive present value. To accomplish these objectives, we can first compute the present values of both strategies and ensure that at least one has a positive present value in addition to comparing the present values of the two strategies. Alternatively, we can calculate the difference between the cash flows at each time period to effectively create a new set of cash flows. Both solution processes should yield an equivalent numeric result when comparing the two strategies, and this numeric equivalence represents the cash flow additivity principle. Let's first create the set of cash flows from the difference of the two strategies as shown in the diagram:
![](https://cdn.mathpix.com/cropped/2025_06_02_764aa5679188af3f43dbg-02.jpg?height=516&width=1031&top_left_y=1694&top_left_x=699)

The present value of these net cash flows is zero, indicating equivalence, as follows:

$$
P V=0+\frac{15}{1.10}+\frac{-5}{(1.10)^{2}}+\frac{-12,65}{(1.10)^{3}}=0 .
$$

The conclusion from this analysis is that the two strategies are economically equivalent; therefore you should have no preference for one over the other. We must also determine whether these strategies are economically valuable. To do so, let's calculate the present value of each strategy individually.

For investment strategy 1, the present value is GBP11.91, as follows:

$$
P V=-100+\frac{45}{1.10}+\frac{45}{(1.10)^{2}}+\frac{45}{(1.10)^{3}}=11.91
$$

For investment strategy 2, the present value is also GBP11.91, as follows:

$$
P V=-100+\frac{60}{1.10}+\frac{40}{(1.10)^{2}}+\frac{32.35}{(1.10)^{3}}=11.91
$$

Both investment strategies are valuable in that the present value of the sums of their cash flows are positive. Since the present values are identical, subtracting the present value of strategy 1 from the present value of strategy 2 is zero (i.e., 11.91-11.91).
Either strategy is recommended as both are valuable and have equal present values.

In the following sections, we apply the cash flow additivity principle to three different economic situations and further illustrate the principle of no arbitrage by comparing two economically equivalent strategies in each situation.

## Implied Forward Rates Using Cash Flow Additivity

Consider two risk-free discount bonds with different maturities as follows:
One-year bond: $r_{1}=2.50 \%$
Two-year bond: $r_{2}=3.50 \%$
A risk neutral investor seeking to earn a return on GBP100 over a two-year investment horizon has two possible strategies:

Investment strategy 1: Invest today for two years at a known annualized yield of 3.50 percent. Using Equation 5, we may solve for the future value in two years ( $F V_{2}$ ) as follows:

$$
\begin{aligned}
& \mathrm{GBP} 100=F V_{2} /\left(1+r_{2}\right)^{2} ; \\
& F V_{2}=\mathrm{GBP} 107.12 .
\end{aligned}
$$

Investment strategy 2: Invest today for one year at a known yield of 2.50 percent and reinvest in one year's time for one year at a rate of $F_{1,1}$ (the oneyear forward rate starting in one year).

These two strategies are summarized in Exhibit 10:

## Exhibit 10: Implied Forward Rate Example

![](https://cdn.mathpix.com/cropped/2025_06_02_764aa5679188af3f43dbg-04.jpg?height=629&width=1090&top_left_y=323&top_left_x=674)

Under the cash flow additivity principle, a risk-neutral investor would be indifferent between strategies 1 and 2 under the following condition:

$$
F V_{2}=P V_{0} \times\left(1+r_{2}\right)^{2}=P V_{0} \times\left(1+r_{1}\right)\left(1+F_{1,1}\right),
$$

GBP107.12 $=\operatorname{GBP} 100(1.025)\left(1+F_{1,1}\right)$, and

$$
F_{1,1}=4.51 \% .
$$

We can rearrange Equation 25 to solve for $F_{1,1}$ in general as follows:

$$
F_{1,1}=\left(1+r_{2}\right)^{2} /\left(1+r_{1}\right)-1
$$

To illustrate why the one-year forward interest rate must be 4.51 percent, let's assume an investor could lock in a one-year rate of 5 percent starting in one year. The following arbitrage strategy generates a riskless profit:

1. Borrow GBP100 for two years at 3.50 percent and agree to pay GBP107.12 in two years.
2. Invest GBP100 for the first year at 2.50 percent and in year two at 5 percent, so receive GBP107.63 in two years.
3. The combination of these two strategies above yields a riskless profit of GBP0.51 in two years with zero initial investment.

This set of strategies illustrates that forward rates should be set such that investors cannot earn riskless arbitrage profits in financial markets. This is demonstrated by comparing two economically equivalent strategies (i.e., borrowing for two years at a two-year rate versus borrowing for two one-year horizons at two different rates) The forward interest rate $F_{1,1}$ may be interpreted as the breakeven one-year reinvestment rate in one year's time.

## EXAMPLE 13

## Forward Interest Rate Changes

At its June 2022 meeting, the US Federal Reserve surprised markets by raising its target interest rate by a greater-than-expected 75 bps and suggested further increases in the future in response to sharply higher inflation. Exhibit 11 shows one-year and two-year US Treasury strip prices per USD100 at the end of May 2022 and after the Fed's decision in June:

Exhibit 11: One- and Two-Year US Treasury Strip Prices

| Date | PV(1y) | PV(2y) |
| :--- | :---: | :---: |
| 31 May 2022 | 98.028 | 95.109 |
| 15 June 2022 | 97.402 | 93.937 |

1. Using the information in Exhibit 11, show the change in the breakeven oneyear reinvestment in one year's time ( $F_{1,1}$ ).

## Solution:

62 bps or 0.62 percent
First, we use Equation 18 to solve for each market discount rate $r$. For example, in the case of the two-year discount bond on 15 June:

$$
r=3.177 \text { percent }=\left(\frac{100}{93.937}\right)^{\frac{1}{2}}-1 .
$$

The following table summarizes the respective discount bond rates:

| Date | $\boldsymbol{r}_{\boldsymbol{1}}$ | $\boldsymbol{r}_{\boldsymbol{2}}$ |
| :--- | :---: | :---: |
| 31 May 2022 | $2.012 \%$ | $2.539 \%$ |
| 15 June 2022 | $2.667 \%$ | $3.177 \%$ |

Solve for the respective forward rates $\left(F_{1,1}\right)$ by rearranging Equation 25:

$$
\begin{aligned}
& F_{1,1}=\left(1+r_{2}\right)^{2} /\left(1+r_{1}\right)-1 . \\
& \underline{F}_{1,1}(31 \text { May }): F_{1,1}=3.069 \%=(1+2.539 \%)^{2} /(1+2.012 \%)-1 . \\
& \underline{F}_{1,1}(15 \text { June }): F_{1,1}=3.689 \%=(1+3.177 \%)^{2} /(1+2.667 \%)-1 .
\end{aligned}
$$

While the higher $r_{1}$ and $r_{2}$ in mid-June shows that investors have factored the immediate 75 bp increase into their nominal discount rate, the 62 bp ( 0.62 percent) increase in $F_{1,1}$ is a measure of expected future rate increases given that the one-year nominal rate of return starts in one year's time. Note also that in a rising rate environment, $F_{1,1}>r_{2}$, as shown in the following diagram comparing $r_{1}, r_{2}$ and $F_{1,1}$ on 31 May (lower rates) to 15 June (higher rates).
![](https://cdn.mathpix.com/cropped/2025_06_02_764aa5679188af3f43dbg-06.jpg?height=595&width=1240&top_left_y=223&top_left_x=597)

## Forward Exchange Rates Using No Arbitrage

We now extend the principle of cash flow additivity to an economic scenario involving different currencies.

Assume that you have USD1,000 to invest for six months. You are considering a riskless investment in either US or Japanese six-month government debt. Let's assume that the current exchange rate between Japanese yen (JPY) and US dollars (USD) is 134.40 (i.e., JPY134.40 = USD1). The six-month Japanese yen risk-free rate is assumed to be 0.05 percent, and the six-month US dollar risk-free rate is 2.00 percent. This example assumes continuous compounding.

Investment strategy 1: Invest USD1,000 in a six-month US Treasury bill
At time $t=0$ : Invest USD1,000 at the 2.00 percent US-dollar risk-free rate for six months.

At time $\mathrm{t}=\mathrm{T}$ in six months: Receive USD1,010.05 (= 1,000e ${ }^{(0.02 \times 0.5)}$ ).
Investment strategy 2: Convert the USD1,000 into Japanese yen at the current exchange rate of 134.40, invest in a six-month Japanese Treasury, and convert this known amount back into US dollars in six months at a sixmonth forward exchange rate set today of 133.096.

At time $t=0$ : Convert USD1,000 into JPY134,400. Lend the JPY134,400 at the 0.05 percent JPY risk-free rate for six months.
At time $\mathrm{t}=\mathrm{T}$ in six months: Receive JPY loan proceeds of 134,433.60 (= $\left.134,400 \mathrm{e}^{(0.0005 \times 0.5)}\right)$. Exchange JPY loan proceeds for US dollars at the forward rate of 133.096 to receive USD1010.05 (=134,433.60/133.096).

These two strategies are economically equivalent in that both involve investing USD1000 at $\mathrm{t}=0$ and receiving USD1010.05 in six months. The element that links these two strategies is the six-month forward exchange rate of 133.096 JPY/USD. If this forward rate is set above or below 133.096, an arbitrage opportunity would exist for investors converting between Japanese yen and US dollars. Exhibit 12 provides a visual layout of the two strategies.

Exhibit 12: No-Arbitrage Condition in the Foreign Exchange Market
![](https://cdn.mathpix.com/cropped/2025_06_02_764aa5679188af3f43dbg-07.jpg?height=608&width=1088&top_left_y=317&top_left_x=361)

## EXAMPLE 14

## Foreign Exchange Forward Rates in a Changing Interest Rate Environment

Central banks responded differently to the sharp rise in inflation during 2022. For example, while the Fed raised rates by 75 bps to 1.75 percent in mid-June, the Bank of England opted for a more gradual approach, raising its benchmark rate by just 25 bps to 1.25 percent. Exhibit 13 compares one-year US Treasury strip rates $\left(r_{\text {USD }}\right)$ from the prior example to UK gilt strip rates $\left(r_{\text {GBP }}\right)$ over the same time frame:

Exhibit 13: Comparison of US Treasury Strip Rates

| Date | $\boldsymbol{r}_{\text {USD }}$ | $\boldsymbol{r}_{\boldsymbol{G B} \boldsymbol{P}}$ |
| :--- | :---: | :---: |
| 31 May 2022 | $2.012 \%$ | $1.291 \%$ |
| 15 June 2022 | $2.667 \%$ | $1.562 \%$ |

1. If we assume the USD/GBP spot price of 1.2602 (or USD1.2602 per GBP1.00) from 31 May remains constant, how does the change in risk-free US dollars versus British pounds rates affect the one-year USD/GBP forward rate?

## Solution:

The no-arbitrage USD/GBP forward rate increases from 1.2693 to 1.2742 . Assume an investor has GBP1,000 to invest for one year in a British-pound or US-dollar risk-free discount bond. The US dollars needed to purchase GBP1 in one year must have a spot price equal to the discounted future price.

As of 31 May:

Domestic Strategy: Invest GBP1,000 at the 1.291 percent one-year British-pound risk-free rate to receive GBP1,012.99 ( $=1,000 \mathrm{e}^{(0.01291)}$ ) in one year.

Foreign Strategy: Convert GBP1,000 at USD/GBP1.2602 to receive USD1,260.20, which invested at the one-year US-dollar risk-free rate of 2.012 percent generates a return of USD1,285.81 (=1,260.20 $\left.\mathrm{e}^{(0.02012)}\right)$ in one year.

The no-arbitrage USD/GBP forward rate as of 31 May is therefore equal to 1.2693 (= USD1,285.81/GBP1,012.99).

As of 15 June:
Domestic Strategy: Invest GBP1,000 at the 1.562 percent one-year British-pound risk-free rate to receive GBP1,015.74 $\left(=1,000 \mathrm{e}^{(0.01562)}\right)$ in one year.

Foreign Strategy: Convert GBP1,000 at 1.2602 to receive USD1,260.20, which invested at the one-year US-dollar risk-free rate of 2.667 percent returns USD1,294.27 (=1,260.20 $\mathrm{e}^{(0.02667)}$ ) in one year.

The no-arbitrage USD/GBP forward rate as of 15 June is equal to 1.2742 (= USD1,294.26/GBP1,015.74).

As of mid-June, an investor agreeing to exchange US dollars for British pounds in one year must deliver more US dollars ( 1.2742 versus 1.2693) in exchange for GBP1 than if the same contract had been entered at the end of May. The greater increase in $\mathrm{r}_{\text {USD }}$ widens the interest rate differential ( $r_{\text {USD }}-r_{\text {GBP }}$ ), causing US dollars to depreciate on a forward basis versus British pounds over the period. Differently put, the expectation for US-dollar depreciation on a forward basis versus British pounds would require a higher US-dollar interest rate to attract investors to US dollars versus British pounds.

## Option Pricing Using Cash Flow Additivity

Let's assume an asset has a current price of 40 Chinese yuan (i.e., CNY40). The asset is risky in that its price may rise 40 percent to CNY56 during the next time period or its price may fall 20 percent to CNY32 during the next time period.

An investor wishes to sell a contract on the asset in which the buyer of the contract has the right, but not obligation, to buy the noted asset for CNY50 at the end of the next time period. We can apply the principle of cash flow additivity to establish no-arbitrage pricing for this contract.

The binomial tree in Exhibit 14 summarizes the two possible future outcomes of the asset:

Exhibit 14: One-Period Binomial Tree for the Asset's Price
![](https://cdn.mathpix.com/cropped/2025_06_02_764aa5679188af3f43dbg-09.jpg?height=361&width=741&top_left_y=313&top_left_x=532)

The contract value under the two scenarios is as follows (shown visually in Exhibit 15):

- Price Increase: The 40 percent increase results in a contract value of CNY 6 (=CNY56 - CNY50), as the contract owner will choose to buy the asset at CNY50 and is able to sell it at a market price of CNY56.
- Price Decrease: The 20 percent decrease results in a contract value of zero (CNY0), as the contract owner will choose not to buy the asset at CNY50 when the market price is only CNY32.


## Exhibit 15: One-Period Binomial Tree for the Contract's Price

![](https://cdn.mathpix.com/cropped/2025_06_02_764aa5679188af3f43dbg-09.jpg?height=340&width=708&top_left_y=1321&top_left_x=554)

Consider the position of the contract seller as follows:

- At $t=0$, the contract value is $c_{0}$.
- At $t=1$, the contract value is either CNY6 (if the underlying asset rises to CNY56) or CNY0 (if the underlying stock falls to CNY32).

The initial contract value $c_{0}$ is unknown and may be determined using cash flow additivity and no-arbitrage pricing. That is, the value of the contract and the underlying asset in each future scenario may be used to construct a risk-free portfolio, or a portfolio where the value is the same in both scenarios. For example, assume at $t$ $=0$ an investor creates a portfolio in which the contract is sold at a price of $c_{0}$ and 0.25 units of the underlying asset are purchased. This portfolio is called a replicating portfolio in that it is designed specifically to create a matching future cash flow stream to that of a risk-free asset. Denoting the value of the portfolio as $V$ at $\mathrm{t}=0$ and at $\mathrm{t}=$ 1 under both the price increase and price decrease scenarios, we have the following:

- $V_{0}=0.25 \times 40-c_{0}$,
- $V_{1}{ }^{u}=0.25 \times 56-6=8$, and
- $V_{1}{ }^{d}=0.25 \times 32-0=8$.

As can be seen, the value of the replicating portfolio is equal to CNY8 regardless of whether the price of the asset increases or decreases. Because of this, the portfolio is risk-free and can be discounted as a risk-free asset. The payoffs for these two scenarios are shown in Exhibit 16.

## Exhibit 16: Call Option Replication

![](https://cdn.mathpix.com/cropped/2025_06_02_764aa5679188af3f43dbg-10.jpg?height=340&width=746&top_left_y=578&top_left_x=844)

To solve for $c_{0}$, we set the present value of the replicating portfolio ( $0.25 \times 40-\mathrm{c}_{0}$ ) equal to the discounted future value of the risk-free payoff of CNY8 under each outcome as in Equation 5. Assume $r$ of 5 percent:

$$
\begin{aligned}
& V_{0}=0.25 S_{0}-c_{0}, \\
& V_{0}=\frac{V_{1}^{u}}{1+r}=\frac{V_{1}^{d}}{1+r}, \text { and } \\
& 0.25 \times 40-c_{0}=\frac{\mathrm{CNY} 8}{1.05} .
\end{aligned}
$$

We solve for $c_{0}$ as CNY2.38. Thus, CNY2.38 is a fair price for the seller of the contract to receive from the buyer of the contract.

As part of the example above, we assumed that the investor buys 0.25 units of the asset as part of the portfolio. This proportion of the underlying asset is known as the hedge ratio in option pricing. In fact, the example just completed is a simplified process for solving for the value of a call option (this material will be covered in more detail later in the curriculum). As in our prior examples, we compare different strategies using cash flow additivity to help solve for a no-arbitrage price for a financial instrument.

## EXAMPLE 15

## Put Option

A put option grants the owner the right, but not the obligation to sell a stock at a predetermined exercise price $X$. If we assume $X=$ CNY50, then the put option value in one period $\left(p_{1}\right)$ is equal to $\operatorname{Max}\left(0, \mathrm{CNY50}-S_{1}\right)$.

1. Using a one-period binomial tree model with the same prices in one year, initial stock price $\left(S_{0}\right)$ of CNY40, and 5 percent discount rate, create a riskfree portfolio replicating the put option with 0.75 units of the underlying asset and solve for the put option price ( $p_{0}$ ).

## Solution:

The one-period binomial model is as follows:
![](https://cdn.mathpix.com/cropped/2025_06_02_764aa5679188af3f43dbg-11.jpg?height=356&width=722&top_left_y=231&top_left_x=544)

The put option value under the two scenarios is as follows:

- Price Increase ( $p_{1}{ }^{u}$ ): The 40 percent increase results in a put option value of CNY0, as the option owner will choose not to sell the stock at the exercise price.
- Price Decrease $\left(p_{1}{ }^{d}\right)$ : The 20 percent decrease results in a put option value of CNY18 (CNY50 - CNY32), as the put option owner will choose to sell the stock with a market price of CNY32 at the exercise price of CNY50.
![](https://cdn.mathpix.com/cropped/2025_06_02_764aa5679188af3f43dbg-11.jpg?height=348&width=714&top_left_y=1005&top_left_x=546)

Unlike the call option, the put option increases in value as the stock price falls, so a risk-free portfolio combines a stock purchase with a purchased put option. Specifically, assume at $t=0$, we sell a put option at a price of $p_{0}$ and purchase 0.75 units of the underlying stock. Portfolio values at $\mathrm{t}=0$ and $\mathrm{t}=$ 1 are as follows:

- $V_{0}=0.75 S_{0}+p_{0}$,
- $V_{1}{ }^{u}=0.75 S_{1}{ }^{u}+p_{1}{ }^{u}$, and
- $V_{1}^{d}=0.75 S_{1}^{d}+\mathrm{p}_{1}^{d}$,
where $V_{1}{ }^{u}=V_{1}{ }^{d}$.
The value of the risk-free portfolio in one period ( $V_{1}=0.75 S_{1}+p_{1}$ ) under the two scenarios is:
- Price Increase $\left(V_{1}{ }^{u}\right)$ : The portfolio value is CNY42 $(=(0.75 \times$ CNY56 $)$ + CNY 0)).
- Price Decrease $\left(V_{1}{ }^{d}\right)$ : The portfolio value is CNY42 $(=(0.75 \times$ CNY32 $)$ + CNY18)).

Solve for $\mathrm{p}_{0}$, by setting the present value of the replicating portfolio $\left(0.75 S_{0}\right.$ $+p_{0}$ ) equal to the discounted future value of the payoff, $S_{0}$ is CNY40 and $r$ is 5 percent:
$V_{0}=0.75 S_{0}{ }_{+} p_{0}$,
$V_{0}=\frac{V_{1}^{u}}{1+r}=\frac{V_{1}^{d}}{1+r}$, and

$$
p_{0}=\frac{C N Y 42}{1.05}-0.75(C N Y 40) .
$$

Solve for $p_{0}$ to be equal to CNY10. The higher put price is a result of the greater payoff of the put option versus the call option under the given parameters of the binomial model. The factors affecting option prices will be addressed in detail later in the curriculum.

