# FORWARD RATE CALCULATIONS 

explain the arbitrage relationship between spot and forward exchange rates and interest rates, calculate a forward rate using points or in percentage terms, and interpret a forward discount or premium

This lesson continues the previous discussion of the FX market by considering the interactions between spot and forward rates, interest rates, and maturities, which exist because of arbitrage relationships. The relationships among these four factors are maintained because of market efficiencies, and any one factor can be determined using the other three as inputs. In addition, this lesson covers the methods of calculating forward rates in point and percentage terms as well as forward discounts and premiums for these rate relationships.

In professional FX markets, forward exchange rates typically are quoted in terms of points (also sometimes referred to as "pips"). The points on a forward rate quote are simply the difference between the forward exchange rate quote and the spot exchange rate quote, with the points scaled so that they can be related to the last decimal in the spot quote. When the forward rate is higher than the spot rate, the points are positive and the base currency is said to be trading at a forward premium. Conversely, if the forward rate is less than the spot rate, the points (forward rate minus spot rate) are negative and the base currency is said to be trading at a forward discount. Of course, if the base currency is trading at a forward premium, then the price currency is trading at a forward discount, and vice versa.

This can best be explained by means of an example. Assume the spot euro-dollar exchange rate (USD/EUR) is 1.15885 and the one-year forward rate is 1.19532 . Hence, the forward rate is trading at a premium to the spot rate (the forward rate is larger than the spot rate) and the one-year forward points are quoted as +364.7 . This +364.7 comes from the following calculation:

$$
1.19532-1.15885=+0.03647
$$

Recall that most non-yen exchange rates are quoted to four decimal places. In this case, we would scale up by four decimal places (multiply by 10,000 ) so that this +0.03647 would be represented as +364.7 points. Notice that the points are scaled to the size of the last digit in the spot exchange rate quote-usually the fourth decimal place. Notice as well that points typically are quoted to one (or more) decimal places, meaning that the forward rate will typically be quoted to five or more decimal places. The exception among the major currencies is the yen, which is typically quoted to two decimal places for spot rates. Here, forward points are scaled up by two decimal places-the last digit in the spot rate quote-by multiplying the difference between forward and spot rates by 100 .

Typically, quotes for forward rates are shown as the number of forward points at each maturity, the time between spot settlement and the settlement of the forward contract. These forward points are also called swap points because an FX swap consists of simultaneous spot and forward transactions. In our example, a trader would have faced a spot rate and forward points in the euro-dollar (USD/EUR) currency pair similar to those in Exhibit 1,

Exhibit 1: Sample Spot and Forward Quotes

| Maturity | Spot Rate or Forward Points |
| :--- | :--- |
| Spot | 1.15885 |
| One week | +5.6 |
| One month | +27.1 |
| Three months | +80.9 |
| Six months | +175.6 |
| Twelve months | +364.7 |

Notice that the absolute number of points generally increases with maturity. This is because the number of points is proportional to the yield differential between the two countries (the Eurozone and the United States, in this case) scaled by the term to maturity. Given the interest rate differential, the longer the term to maturity, the greater the absolute number of forward points. Similarly, given the term to maturity, a wider interest rate differential implies a greater absolute number of forward points. (This relationship will be explained and demonstrated in more detail later in this lesson.)

To convert any of these quoted forward points into a forward rate, one would divide the number of points by 10,000 (to scale down to the fourth decimal place, the last decimal place in the spot quote) and then add the result to the spot exchange rate quote. (As mentioned previously, exchange rates for the Japanese yen, such as the JPY/USD exchange rate, are quoted to two decimal places only, so forward points for the dollar-yen currency pair are divided by 100.) For example, using the data in Exhibit 1 for USD/EUR, the three-month forward rate in this case would be as follows:

$$
1.15885+\left(\frac{+80.9}{10,000}\right)=1.15885+0.00809=1.16694
$$

Occasionally, one will see the forward rate or forward points represented as a percentage of the spot rate rather than as an absolute number of points. Continuing the previous example, the three-month forward rate for USD/EUR can be represented as follows:

$$
\frac{1.15885+0.00809}{1.15885}-1=\left(\frac{1.16694}{1.15885}\right)-1=+0.698 \%
$$

This shows that either the forward rate or the forward points can be used to calculate the percentage discount (or premium) in the forward market-in this case, +0.698 percent rounding to three decimal places. To convert a spot quote into a forward quote when the points are shown as a percentage, one simply multiplies the spot rate by one plus the percentage premium or discount:

$$
1.15885 \times(1+0.698 \%)=1.15885 \times(1.0000+0.00698) \approx 1.16694 .
$$

Note that, rounded to the fifth decimal place, this is equal to our previous calculation. However, it is typically the case in professional FX markets that forward rates will be quoted in terms of pips rather than percentages.

## Arbitrage Relationships

We now turn to the interaction between spot rates, forward rates, and interest rates and how their relationship is derived. Forward exchange rates are based on an arbitrage relationship that equates the investment return on two alternative but equivalent investments. Consider the case of an investor with funds to invest. For simplicity, we will assume that one unit of the investor's domestic currency will be invested for one period. One alternative is to invest for one period at the domestic risk-free rate $\left(r_{d}\right)$; at the end of the period, the amount of funds held is equal to ( $1+\mathrm{r}_{\mathrm{d}}$ ). An alternative
investment is to convert this one unit of domestic currency to foreign currency using the spot rate of $S_{f / d}$ (number of units of foreign currency per one unit of domestic currency). This can be invested for one period at the foreign risk-free rate; at the end of the period, the investor would have $S_{f / d}\left(1+r_{f}\right)$ units of foreign currency. These funds must then be converted back to the investor's domestic currency. If the exchange rate to be used for this end-of-period conversion was pre-contracted at the start of the period (i.e., a forward rate was used), it would eliminate any FX risk from converting at a future, unknown spot rate. Given the assumed exchange rate convention (foreign/ domestic), the investor would obtain ( $1 / \mathrm{F}_{\mathrm{f} / \mathrm{d}}$ ) units of the domestic currency for each unit of foreign currency sold forward. Note that this process of converting domestic funds in the spot FX market, investing at the foreign risk-free rate, and then converting back to the domestic currency with a forward rate is termed "swap financing."

Hence, we have two alternative investments-both are risk free because both are invested at risk-free interest rates and because any FX risk was eliminated (hedged) by using a forward rate. Because these two investments are equal in risk characteristics, they must have the same return. Bearing in mind that the currency quoting convention is the number of foreign currency units per single domestic unit ( $f / d$ ), this relationship can be stated as follows:

$$
\left(1+r_{d}\right)=S_{f / d}\left(1+r_{f}\right)\left(\frac{1}{F_{f / d}}\right)
$$

This is an arbitrage relationship because it describes two alternative investments (one on either side of the equal sign) that should have equal returns. If they do not, a riskless arbitrage opportunity exists because an investor can sell short the investment with the lower return and invest the funds in the investment with the higher return; the difference between the two returns is pure profit. It is because of this arbitrage relationship that the all-in financing rate using swap financing is close to the domestic interest rate.

This formula is perhaps the easiest and most intuitive way to remember the formula for the forward rate because this formula is based directly on the underlying intuition (the arbitrage relationship of two alternative but equivalent investments, one on either side of the equal sign). Also, the right-hand side of the equation, for the hedged foreign investment alternative, is arranged in proper time sequence: (1) convert domestic to foreign currency; then (2) invest the foreign currency at the foreign interest rate; and finally (3) convert the foreign currency back to the domestic currency. Recall that this equation is based on an $f / d$ exchange rate quoting convention. If the exchange rate data were presented in $d / f$ form, one could either invert these quotes back to $f / d$ form and use the previous equation or use the following equivalent equation:

$$
\left(1+\mathrm{r}_{\mathrm{d}}\right)=\left(1 / \mathrm{S}_{\mathrm{d} / \mathrm{f}}\right)\left(1+\mathrm{r}_{\mathrm{f}}\right) \mathrm{F}_{\mathrm{d} / \mathrm{f}} .
$$

If this latter equation were used, remember that forward and spot exchange rates are now being quoted on a $d / f$ convention.

This arbitrage equation can be rearranged as needs require. For example, to get the formula for the forward rate, the previous equation can be restated as follows:

$$
F_{f l d}=S_{f l d}\left(\frac{1+r_{f}}{1+r_{d}}\right) .
$$

Given the spot exchange rate and the domestic and foreign risk-free interest rates, the forward rate is the value that completes this equation and eliminates any arbitrage opportunity. For example, let's assume that the spot exchange rate ( $S_{\mathrm{f} / \mathrm{d}}$ ) is 1.6535, the domestic 12 -month risk-free rate is 3.50 percent, and the foreign 12 -month risk-free rate is 5.00 percent. The 12 -month forward rate $\left(\mathrm{F}_{\mathrm{f} / \mathrm{d}}\right)$ must then be equal to:

$$
1.6535\left(\frac{1.0500}{1.0350}\right)=1.6775 .
$$

Suppose instead that, with the spot exchange rate and interest rates unchanged, you were given a quote on the 12 -month forward rate $\left(\mathrm{F}_{\mathrm{f} / \mathrm{d}}\right)$ of 1.6900 . Because this misquoted forward rate does not agree with the arbitrage equation, it would present a riskless arbitrage opportunity. This can be calculated by using the arbitrage equation to compute the return on the two alternative investment strategies. The return on the domestic-only investment approach is the domestic risk-free rate ( 3.50 percent). In contrast, the return on the hedged foreign investment when this misquoted forward rate is put into the arbitrage equation equals:

$$
S_{f l d}\left(1+r_{f}\right)\left(\frac{1}{F_{f l d}}\right)=1.6535(1.05)\left(\frac{1}{1.6900}\right)=1.0273
$$

This results in a return of 2.73 percent. Hence, the investor could make riskless arbitrage profits by borrowing at the higher foreign risk-free rate, selling the foreign currency at the spot exchange rate, hedging the currency exposure (buying the foreign currency back) at the misquoted forward rate, investing the funds at the lower domestic risk-free rate, and thereby getting a profit of 77 basis points ( $3.50 \%-2.73 \%$ ) for each unit of domestic currency involved-all with no upfront commitment of the investor's own capital. Any such opportunity in real-world financial markets would be quickly "arbed" away. In this example, the investor actually borrows at the higher of the two interest rates but makes a profit because the foreign currency is underpriced in the forward market.

The underlying arbitrage equation can also be rearranged to show the forward rate as a percentage of the spot rate:

$$
\frac{F_{f l d}}{S_{f l d}}=\left(\frac{1+r_{f}}{1+r_{d}}\right)
$$

This shows that, given an $f / d$ quoting convention, the forward rate will be higher than (be at a premium to) the spot rate if foreign interest rates are higher than domestic interest rates. More generally, and regardless of the quoting convention, the currency with the higher (lower) interest rate will always trade at a discount (premium) in the forward market.

One context in which forward rates are quoted as a percentage of spot rates occurs when forward rates are interpreted as expected future spot rates, as follows:

$$
F_{t}=S_{t+1}
$$

Substituting this expression into the previous equation and doing some rearranging leads to the following:

$$
\frac{S_{t+1}}{S_{t}}-1=\% \Delta S_{t+1}=\left(\frac{r_{f}-r_{d}}{1+r_{d}}\right)
$$

This shows that if forward rates are interpreted as expected future spot rates, the expected percentage change in the spot rate is proportional to the interest rate differential ( $r_{f}-r_{d}$ ).

It is intuitively appealing to see forward rates as expected future spot rates. However, this interpretation of forward rates should be used cautiously. The direction of the expected change in spot rates is somewhat counterintuitive. All else being equal, an increase in domestic interest rates (e.g., the central bank tightens monetary policy) would typically be expected to lead to an increase in the value of the domestic currency. In contrast, the previous equation indicates that, all else equal, a higher domestic interest rate implies slower expected appreciation (or greater expected depreciation) of the domestic currency (recall that this equation is based on an $f / d$ quoting convention).

More important, historical data show that forward rates are poor predictors of future spot rates. Although various econometric studies suggest that forward rates may be unbiased predictors of future spot rates (i.e., they do not systematically over- or under-estimate future spot rates), this is not particularly useful information because
the margin of error for these forecasts is so large. As mentioned in the Introduction, the FX market is far too complex and dynamic to be captured by a single variable, such as the level of the yield differential between countries. Moreover, according to the formula for the forward rate, forward rates are based on domestic and foreign interest rates. This means that anything that affects the level and shape of the yield curve in either the domestic or foreign market will also affect the relationship between spot and forward exchange rates. In other words, FX markets do not operate in isolation but rather reflect almost all factors affecting other markets globally; anything that affects expectations or risk premia in these other markets will reverberate in forward exchange rates as well. Although the level of the yield differential is one factor that the market may look at in forming spot exchange rate expectations, it is only one of many factors. (Many traders look to the trend in the yield differential rather than the level of the differential.) Moreover, a lot of noise in FX markets makes almost any model-no matter how complex-a relatively poor predictor of spot rates at any given point in the future. In practice, FX traders and market strategists do not base either their currency expectations or trading strategies solely on forward rates.

For the purposes of this lesson, it is best to understand forward exchange rates simply as a product of the arbitrage equation outlined earlier and forward points as being related to the (time-scaled) interest rate differential between the two countries. Reading any more than that into forward rates or interpreting them as the "market forecast" can be potentially misleading.

## Forward Discounts and Premiums

We now continue our discussion of forward discounts and premiums based on spot and interest rates and add the impact of maturity. To understand the relationship between maturity and forward points, we need to generalize our arbitrage formula slightly. Suppose the investment horizon is a fraction, $\tau$, of the period for which the interest rates are quoted. Then the interest earned in the domestic and foreign markets would be ( $\mathrm{r}_{\mathrm{d}} \tau$ ) and ( $\mathrm{r}_{\mathrm{f}} \tau$ ), respectively. Substituting this into our arbitrage relationship and solving for the difference between the forward and spot exchange rates gives the following:

$$
F_{f l d}-S_{f l d}=S_{f l d}\left(\frac{r_{f}-r_{d}}{1+r_{d} \tau}\right) \tau .
$$

This equation shows that forward points (appropriately scaled) are proportional to the spot exchange rate and to the interest rate differential and approximately (but not exactly) proportional to the horizon of the forward contract.

For example, suppose that we wanted to determine the 30-day forward exchange rate given a 30-day domestic risk-free interest rate of 2.00 percent per year, a 30-day foreign risk-free interest rate of 3.00 percent per year, and a spot exchange rate ( $\mathrm{S}_{\mathrm{f} / \mathrm{d}}$ ) of 1.6555 . The risk-free assets used in this arbitrage relationship are typically bank deposits quoted using the London Interbank Offered Rate (Libor) for the currencies involved. The day count convention for Libor deposits is actual/360. Incorporating the fractional period ( $\tau$ ) and inserting the data into the forward rate equation leads to the following 30-day forward rate:

$$
F_{f l d}=S_{f l d}\left(\frac{1+r_{f} \tau}{1+r_{d} \tau}\right)=1.6555\left(\frac{1+0.0300\left[\frac{30}{360}\right]}{1+0.0200\left[\frac{30}{360}\right]}\right)=1.6569 .
$$

This means that, for a 30-day term, forward rates are trading at a premium of 14 pips (1.6569-1.6555). This can also be calculated using the previous formula for swap points:

$$
F_{f l d}-S_{f l d}=S_{f l d}\left(\frac{r_{f}-r_{d}}{1+r_{d} \tau}\right) \tau=1.6555\left(\frac{0.0300-0.0200}{1+0.0200\left[\frac{30}{360}\right]}\right)\left[\frac{30}{360}\right]=0.0014 .
$$

As should be clear from this expression, the absolute number of swap points will be closely related to the term of the forward contract (i.e., approximately proportional to $\tau$ $=$ actual $/ 360$ ). For example, leaving the spot exchange rate and interest rates unchanged, and setting the term of the forward contract to 180 days, we obtain the following:

$$
F_{f l d}-S_{f l d}=1.6555\left(\frac{0.0300-0.0200}{1+0.0200\left[\frac{180}{360}\right]}\right)\left[\frac{180}{360}\right]=0.0082
$$

This leads to the forward rate trading at a premium of 82 pips . The increase in the number of forward points is approximately proportional to the increase in the term of the contract (from 30 days to 180 days). Note that although the term of the 180-day forward contract is six times longer than that of a 30-day contract, the number of forward points is not exactly six times larger: $6 \times 14=84$.

Similarly, the number of forward points is proportional to the spread between foreign and domestic interest rates $\left(r_{f}-r_{d}\right)$. For example, with reference to the original 30-day forward contract, let's set the foreign interest rate to 4.00 percent leaving the domestic interest rate and spot exchange rate unchanged. This doubles the interest rate differential $\left(r_{f}-r_{d}\right)$ from 1.00 percent to 2.00 percent; it also doubles the forward points (rounding to four decimal places), as follows:

$$
F_{f l d}-S_{f l d}=1.6555\left(\frac{0.0400-0.0200}{1+0.0200\left[\frac{30}{360}\right]}\right)\left[\frac{30}{360}\right]=0.0028
$$

## EXAMPLE 2

## Forward Rate Calculations

A French company recently finalized a sale of goods to a UK-based client and expects to receive a payment of GBP50 million in 32 days. The corporate treasurer at the French company wants to hedge the FX risk of this transaction and receives the following exchange rate information from a dealer:

| GBP/EUR spot rate | 0.8752 |
| :--- | :--- |
| One-month forward points | -1.4 |

1. According to the exchange rate information, the treasurer could hedge the FX risk by:
A. buying euro (selling British pounds) at a forward rate of 0.87380 .
B. buying euro (selling British pounds) at a forward rate of 0.87506 .
C. selling euro (buying British pounds) at a forward rate of 0.87506 .

## Solution:

B is correct. The French company would want to convert the British pound to its domestic currency, the euro (it wants to sell British pounds and buy euros). The forward rate would be equal to: $0.8752+(-1.4 / 10,000)=$ 0.87506 .
2. According to the exchange rate information, the best interpretation of the forward discount shown is that:
A. the euro is expected to depreciate over the next 30 days.
B. one-month UK interest rates are higher than those in the Eurozone.
C. one-month Eurozone interest rates are higher than those in the United Kingdom.

## Solution:

C is correct. A forward discount indicates that interest rates in the base currency country (France, in this case, which uses the euro) are higher than those in the price currency country (the United Kingdom).
3. According to the exchange rate information, if the 12 -month forward rate is $0.87295 \mathrm{GBP} /$ EUR , then the 12-month forward points are closest to:
A. -22.5 .
B. -2.25 .
C. -0.00225 .

## Solution:

A is correct. The number of forward points is equal to the scaled difference between the forward rate and the spot rate. In this case: $0.87295-0.87520$ $=-0.00225$. This is then multiplied by 10,000 to convert to the number of forward points.
4. If a second dealer quotes GBP/EUR at a 12-month forward discount of 0.30 percent on the same spot rate, the French company could:
A. trade with either dealer because the 12-month forward quotes are equivalent.
B. lock in a profit in 12 months by buying euros from the second dealer and selling it to the original dealer.
C. lock in a profit in 12 months by buying euros from the original dealer and selling it to the second dealer.

## Solution:

B is correct. A 0.30 percent discount means that the second dealer will sell euros 12 months forward at $0.8752 \times(1-0.0030)=0.87257$, a lower price per euro than the original dealer's quote of 0.87295 . Buying euros at the cheaper 12-month forward rate (0.87257) and selling the same amount of euros 12 months forward at the higher 12-month forward rate (0.87295) means a profit of (0.87295-0.87257 = GBP0.00038) per euro transacted, receivable when both forward contracts settle in 12 months.
5. If the 270-day Libor rates (annualized) for the euro and British pound are 1.370 percent and 1.325 percent, respectively, and the spot GBP/EUR exchange rate is 0.8489 , then the number of forward points for a 270-day forward rate ( $\mathrm{F}_{\mathrm{GBP} / \mathrm{EUR}}$ ) is closest to:
A. -22.8 .
B. -3.8 .
C. -2.8 .

## Solution:

C is correct, because the forward rate is calculated as:

$$
F_{\frac{G B P}{E U R}}=S_{\frac{G B P}{E U R}}\left(\frac{1+r_{G B P}\left[\frac{\text { Actual }}{360}\right]}{1+r_{E U R}\left[\frac{\text { Actual }}{360}\right]}\right)=0.8489\left(\frac{1+0.01325\left[\frac{270}{360}\right]}{1+0.01370\left[\frac{270}{360}\right]}\right)=0.84862 .
$$

This shows that the forward points are at a discount of: $0.84862-0.84890$ $=-0.00028$, or -2.8 points. This can also be seen using the swap points formula:

$$
F_{\frac{G B P}{E U R}}-S_{\frac{G B P}{E U R}}=0.8489\left(\frac{0.01325-0.01370}{1+0.01370\left[\frac{270}{360}\right]}\right)\left[\frac{270}{360}\right]=-0.00028
$$

The calculation of -3.8 points omits the day count $(270 / 360)$, and -22.8 points gets the scaling wrong.

