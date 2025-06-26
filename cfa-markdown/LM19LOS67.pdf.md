- As a result of the interrelationship among these four variables, any variable can be calculated by using the other three as inputs.


## CROSS-RATE CALCULATIONS

calculate and interpret currency cross-rates
Global currencies are bought, sold, and exchanged in the foreign exchange (FX) market. In this decentralized market, participants trade currencies utilizing exchange rates, which typically reflect an efficient market. This section will cover the use of cross exchange rate relationships (cross-rates) to calculate exchange rates between two currencies using a third currency. It also will introduce calculations used in the FX market to trade currencies.

Given two exchange rates involving three currencies, it is possible to back out the cross-rate. For example, as we have seen in a prior lesson, the FX market convention is to quote the exchange rate between the US dollar and the euro as euro-dollar (USD/EUR). The FX market also quotes the exchange rate between the Canadian dollar and US dollar as dollar-Canada (CAD/USD). Given these two exchange rates, it is possible to back out the cross-rate between the euro and the Canadian dollar, which according to market convention is quoted as euro-Canada (CAD/EUR). This calculation is shown as follows:

$$
\frac{\mathrm{CAD}}{\mathrm{USD}} \times \frac{\mathrm{USD}}{\mathrm{EUR}}=\frac{\mathrm{CAD}}{\mathrm{USD}} \times \frac{\mathrm{USD}}{\mathrm{EUR}}=\frac{\mathrm{CAD}}{\mathrm{EUR}} .
$$

Hence, to get a euro-Canada (CAD/EUR) quote, we must multiply the dollar-Canada (CAD/USD) quote by the euro-dollar (USD/EUR) quote. For example, assume the exchange rate for dollar-Canada is 1.3020 and the exchange rate for euro-dollar is 1.1701. Using these spot exchange rates, the euro-Canada cross-rate equals:

$$
1.3020 \times 1.1701=1.5235 \text { CAD per EUR. }
$$

The professional FX market does not use the convention of direct or indirect quotes because these conventions depend on one's location to determine the domestic versus foreign currencies. Instead, the market uses rate quotes on defined conventional currency pairs. Sometimes, to get a cross-rate using several currency quotes, it is necessary to invert a quote to get an intermediary currency that can be canceled out in the equation to obtain the cross-rate. For example, to get a Canada-yen (JPY/CAD) quote, one typically uses the dollar-Canada (CAD/USD) rate and dollar-yen (JPY/ USD) rate, which are the market conventions. This Canada-yen calculation requires that the dollar-Canada rate (CAD/USD) be inverted to a Canada-dollar (USD/CAD) quote for the calculations to work, as follows:

$$
\left(\frac{\mathrm{CAD}}{\mathrm{USD}}\right)^{-1} \times \frac{\mathrm{JPY}}{\mathrm{USD}}=\frac{\mathrm{USD}}{\mathrm{CAD}} \times \frac{\mathrm{JPY}}{\mathrm{USD}}=\frac{\mathrm{USD}}{\mathrm{CAD}} \times \frac{\mathrm{JPY}}{\mathrm{USD}}=\frac{\mathrm{JPY}}{\mathrm{CAD}} .
$$

Hence, to get a Canada-yen (JPY/CAD) quote, we must first invert the dollar-Canada (CAD/USD) quote before multiplying by the dollar-yen (JPY/USD) quote. Market quotes for most currencies are quoted to four decimal places; however, the Japanese yen exchange rate is quoted to two decimal places. For example, assume that we have spot exchange rates of 1.3020 for dollar-Canada (CAD/USD) and 111.94 for dollar-yen (JPY/USD). The dollar-Canada rate of 1.3020 inverts to 0.7680 ; multiplying this value by the dollar-yen quote of 111.94 gives the following Canada-yen quote:

$$
0.7680 \times 111.94=85.97 \mathrm{JPY} \text { per CAD. }
$$

Market participants asking for a quote in a cross-rate currency pair typically will not need to do this calculation themselves: Either the dealer or the electronic trading platform will provide a quote in the specified currency pair. (For example, a client asking for a quote in Canada-yen will receive that quote from the dealer; he will not be given separate dollar-Canada and dollar-yen quotes to do the calculation.) Dealers providing the quotes often have to do this calculation themselves if only because the dollar-Canada and dollar-yen currency pairs often trade on different trading desks and involve different traders. Electronic dealing machines used in both the interbank market and bank-to-client markets often provide this mathematical operation to calculate cross-rates automatically.

Because market participants can receive both a cross-rate quote (e.g., Canada-yen) as well as the component underlying exchange rate quotes (e.g., dollar-Canada and dollar-yen), these cross-rate quotes must be consistent with the previous equation; otherwise, the market will arbitrage the mispricing. Extending our example, we calculate a Canada-yen (JPY/CAD) rate of 85.97 based on underlying dollar-Canada (CAD/USD) and dollar-yen (JPY/USD) rates of 1.3020 and 111.94, respectively. Now suppose that at the same time a misguided dealer quotes a Canada-yen rate of 86.20. This is a different price in Canada-yen for an identical service-that is, converting yen into Canadian dollars. Hence, any trader could buy CAD1 at the lower price of JPY85.97and then turn around and sell CAD1 at JPY86.20 (recall our earlier discussion of how price and base currencies are defined). The riskless arbitrage profit is JPY0.23 per CAD1. The arbitrage-called triangular arbitrage (we use "tri-" because it involves three currencies-would continue until the price discrepancy was removed.

In reality, however, these discrepancies in cross-rates rarely occur because both human traders and automatic trading algorithms are constantly on alert for any pricing inefficiencies. In practice, and for the purposes of this lesson, we can consider cross-rates as being consistent with their underlying exchange rate quotes and can assume that given any two exchange rates involving three currencies, we can back out the third cross-rate.

## EXAMPLE 1

## Cross-Rates and Percentage Changes

A research report produced by a dealer includes the following spot rate quotes:

| Currency | Spot Rate | Expected Spot Rate in One <br> Year |
| :--- | :---: | :---: |
| USD/EUR | 1.1701 | 1.1619 |
| CHF/USD | 0.9900 | 0.9866 |
| USD/GBP | 1.3118 | 1.3066 |

1. The spot CHF/EUR cross-rate is closest to:
A. 0.8461 .
B. 0.8546 .
C. 1.1584 .

Solution:
C is correct:

$$
\frac{\mathrm{CHF}}{\mathrm{EUR}}=\frac{\mathrm{USD}}{\mathrm{EUR}} \times \frac{\mathrm{CHF}}{\mathrm{USD}}=1.1701 \times 0.9900=1.1584
$$

2. The spot GBP/EUR cross-rate is closest to:
A. 0.8920 .
B. 1.1211.
C. 1.4653.

Solution:
A is correct:

$$
\frac{\mathrm{GBP}}{\mathrm{EUR}}=\frac{\mathrm{USD}}{\mathrm{EUR}} \times\left(\frac{\mathrm{USD}}{\mathrm{GBP}}\right)^{-1}=\frac{\mathrm{USD}}{\mathrm{EUR}} \times \frac{\mathrm{GBP}}{\mathrm{USD}}=\frac{1.1701}{1.3118}=0.8920
$$

3. Based on the research report, the euro is expected to appreciate by how much against the US dollar over the next year?
A. -0.7 percent
B. +0.7 percent
C. +1.0 percent

## Solution:

A is correct. The euro is the base currency in the USD/EUR quote, and the expected decrease in the USD/EUR rate indicates that the euro is depreciating. In one year, it will cost less, in US dollars, to buy one euro. Mathematically:

$$
\frac{1.1619}{1.1701}-1=-0.7 \%
$$

4. Based on the research report, how much is the US dollar expected to appreciate against the British pound sterling over the next year?
A. +0.6 percent
B. -0.4 percent
C. +0.4 percent

## Solution:

C is correct. The British pound is the base currency in the USD/GBP quote, and the expected decrease in the USD/GBP rate means that the British pound is expected to depreciate against the US dollar. Or equivalently, the US dollar is expected to appreciate against the British pound. Mathematically:

$$
\left(\frac{1.3066}{1.3118}\right)^{-1}-1=\frac{1.3118}{1.3066}-1=+0.4 \%
$$

5. Over the next year, the Swiss franc is expected to:
A. depreciate against the British pound.
B. depreciate against the euro.
C. appreciate against the British pound, euro, and US dollar.

## Solution:

C is correct: Because the question does not require calculating the magnitude of the appreciation or depreciation, we can use the Swiss franc as either the price currency or the base currency. In this case, it is easier to use the Swiss franc as the price currency. CHF/USD is expected to decline from 0.9900 to 0.9866 , so the Swiss franc is expected to be stronger (i.e., it should appreciate against the US dollar). CHF/EUR is currently 1.1584 (see the
solution to problem 1) and is expected to be $1.1463(=0.9866 \times 1.1619)$, so the Swiss franc is expected to appreciate against the euro. CHF/GBP is currently $1.2987(=0.9900 \times 1.3118)$ and is expected to be $1.2891(=0.9866 \times$ 1.3066), so the Swiss franc is also expected to appreciate against the British pound.
Alternatively, we can derive this answer intuitively. According to the research report, the CHF/USD rate is expected to decline: That is, the US dollar is expected to depreciate against the Swiss franc, or alternatively, the Swiss franc is expected to appreciate against the US dollar. The USD/EUR and USD/GBP rates are also decreasing, meaning that the euro and British pound are expected to depreciate against the US dollar, or alternatively, the US dollar is expected to appreciate against the euro and British pound. If the Swiss franc is expected to appreciate against the US dollar and the US dollar is expected to appreciate against both the euro and British pound, it follows that the Swiss franc is expected to appreciate against both the euro and British pound.
6. Based on the research report, which of the following lists the three currencies from strongest to weakest over the next year?
A. US dollar, British pound, euro
B. US dollar, euro, British pound
C. Euro, US dollar, British pound

Solution:
A is correct. USD/EUR is expected to decline from 1.1701 to 1.1619, while USD/GBP is expected to decline from 1.3118 to 1.3066 . So, the US dollar is expected to be stronger than both the euro and British pound. GBP/EUR is currently $0.8920\left[=(1.3118)^{-1} \times 1.1701\right]$ and is expected to be $0.8893[=$ $\left.(1.3066)^{-1} \times 1.1619\right]$, so the British pound is expected to be stronger than the euro.
7. Based on the research report, which of the following lists the three currencies in order of appreciating the most to appreciating the least (in percentage terms) against the US dollar over the next year?
A. British pound, Swiss franc, euro
B. Swiss franc, British pound, euro
C. Euro, Swiss franc, British pound

Solution:
B is correct. The USD/EUR rate depreciates by -0.7 percent (= [1.1619/1.1701] - 1), which is the depreciation of the base currency euro against the US dollar. The USD/GBP rate declines -0.4 percent (= [1.3066/1.3118] - 1), which is the depreciation of the British pound against the US dollar. Inverting the CHF/USD rate to a USD/CHF convention shows that the base currency Swiss franc appreciates by +0.35 percent against the US dollar (= [1.0136/1.0101] - 1).

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

