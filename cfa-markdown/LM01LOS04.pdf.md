$$
\mathrm{CF}_{3}=142.64
$$

$\mathrm{CF}_{0}$ refers to the initial investment of USD100 million made at the beginning of the first four-month interval on 1 January. $\mathrm{CF}_{1}$ refers to the cash flows made at end of the first four-month interval or the beginning of the second four-month interval on 1 May. Those cash flows include a cash inflow of USD2 million for the dividend received and cash outflows of USD22 million for the dividend reinvested and additional investment, respectively. The second four-month interval had no cash flow so $\mathrm{CF}_{2}$ is equal to zero. $\mathrm{CF}_{3}$ refers to the cash inflows at the end of the third four-month interval. Those cash inflows include a USD2.64 million dividend received and the fund's terminal market value of USD140 million.
Using a spreadsheet or IRR-enabled calculator, we use $-100,-20,0$, and USD142.64 for the $t=0, t=1, t=2$, and $t=3$ net cash flows, respectively. Using either tool, we get a four-month IRR of 6.28 percent.
$\frac{\mathrm{CF}_{0}}{(1+\mathrm{IRR})^{0}}+\frac{\mathrm{CF}_{1}}{(1+\mathrm{IRR})^{1}}+\frac{\mathrm{CF}_{2}}{(1+\mathrm{IRR})^{2}}+\frac{\mathrm{CF}_{3}}{(1+\mathrm{IRR})^{3}}=0$
$\frac{-100}{1}+\frac{-20}{(1+\mathrm{IRR})^{1}}+\frac{0}{(1+\mathrm{IRR})^{2}}+\frac{142.64}{(1+\mathrm{IRR})^{3}}=0$.
$\mathrm{IRR}=6.28 \%$
The quick way to annualize this four-month return is to multiply it by 3 . A more accurate way is to compute it on a compounded basis as: $(1.0628)^{3}-1$ $=0.2005$ or 20.05 percent.
These calculations can also be performed using Excel using the $=$ IRR(cash flows) function, which results in an IRR of 6.28 percent.
3. Interpret the differences between the Fund's time-weighted and mon-ey-weighted rates of return.

## Solution:

In this example, the time-weighted return ( 21.03 percent) is greater than the money-weighted return ( 20.05 percent). The Walbright Fund's performance was relatively poorer during the eight-month period, when the fund had more money invested, than the overall performance. This fact is reflected in a lower money-weighted rate of return compared with the time-weighted rate of return, as the money-weighted return is sensitive to the timing and amount of withdrawals and additions to the portfolio.

The accurate measurement of portfolio returns is important to the process of evaluating portfolio managers. In addition to considering returns, however, analysts must also weigh risk. When we worked through Example 9, we stopped short of suggesting that in-house management was superior to Super Trust because it earned a higher time-weighted rate of return. A judgment as to whether performance was "better" or "worse" must include the risk dimension, which will be covered later in your study materials.

## ANNUALIZED RETURN

calculate and interpret annualized return measures and continuously compounded returns, and describe their appropriate uses

The period during which a return is earned or computed can vary and often we have to annualize a return that was calculated for a period that is shorter (or longer) than one year. You might buy a short-term treasury bill with a maturity of three months, or you might take a position in a futures contract that expires at the end of the next quarter. How can we compare these returns?

In many cases, it is most convenient to annualize all available returns to facilitate comparison. Thus, daily, weekly, monthly, and quarterly returns are converted to annualized returns. Many formulas used for calculating certain values or prices also require all returns and periods to be expressed as annualized rates of return. For example, the most common version of the Black-Scholes option-pricing model requires annualized returns and periods to be in years.

## Non-annual Compounding

Recall that interest may be paid semiannually, quarterly, monthly, or even daily. To handle interest payments made more than once a year, we can modify the present value formula as follows. Here, $R_{s}$ is the quoted interest rate and equals the periodic interest rate multiplied by the number of compounding periods in each year. In general, with more than one compounding period in a year, we can express the formula for present value as follows:

$$
\mathrm{PV}=\mathrm{FV}_{N}\left(1+\frac{R_{s}}{m}\right)^{-m N},
$$

where
$m=$ number of compounding periods per year,
$\mathrm{R}_{\mathrm{S}}=$ quoted annual interest rate, and
$N=$ number of years.
The formula in Equation 8 is quite similar to the simple present value formula. As we have already noted, present value and future value factors are reciprocals. Changing the frequency of compounding does not alter this result. The only difference is the use of the periodic interest rate and the corresponding number of compounding periods.

The following example presents an application of monthly compounding.

## EXAMPLE 11

## The Present Value of a Lump Sum with Monthly Compounding

The manager of a Canadian pension fund knows that the fund must make a lump-sum payment of CAD5 million 10 years from today. She wants to invest an amount today in a guaranteed investment contract (GIC) so that it will grow to the required amount. The current interest rate on GICs is 6 percent a year, compounded monthly.

1. How much should she invest today in the GIC?

## Solution:

By applying Equation 8, the required present value is calculated as follow:

$$
\begin{aligned}
& \mathrm{FV}_{N}=\mathrm{CAD} 5,000,000 \\
& R_{s}=6 \%=0.06 \\
& m=12 \\
& R_{s} / m=0.06 / 12=0.005 \\
& N=10 \\
& m N=12(10)=120 \\
& \mathrm{PV}=\mathrm{FV}_{N}\left(1+\frac{R_{s}}{m}\right)^{-m N} \\
& =\mathrm{C} A D 5,000,000(1.005)^{-120} \\
& =\mathrm{C} A D 5,000,000(0.549633) \\
& =\mathrm{C} A D 2,748,163.67
\end{aligned}
$$

In applying Equation 8, we use the periodic rate (in this case, the monthly rate) and the appropriate number of periods with monthly compounding (in this case, 10 years of monthly compounding, or 120 months).

## Annualizing Returns

To annualize any return for a period shorter than one year, the return for the period must be compounded by the number of periods in a year. A monthly return is compounded 12 times, a weekly return is compounded 52 times, and a quarterly return is compounded 4 times. Daily returns are normally compounded 365 times. For an uncommon number of days, we compound by the ratio of 365 to the number of days.

If the weekly return is 0.2 percent, then the compound annual return is 10.95 percent (there are 52 weeks in a year):

$$
\begin{aligned}
& R_{\text {annual }}=\left(1+R_{\text {weekly }}\right)^{52}-1=(1+0.2 \%)^{52}-1 \\
& =(1.002)^{52}-1=0.1095=10.95 \%
\end{aligned}
$$

If the return for 15 days is 0.4 percent, then the annualized return is 10.20 percent, assuming 365 days in a year:

$$
\begin{aligned}
& R_{\text {annual }}=\left(1+R_{15}\right)^{365 / 15}-1=(1+0.4 \%)^{365 / 15}-1 \\
& =(1.004)^{365 / 15}-1=0.1020=10.20 \%
\end{aligned}
$$

A general equation to annualize returns is given, where $c$ is the number of periods in a year. For a quarter, $c=4$ and for a month, $c=12$ :

$$
R_{\text {annual }}=\left(1+R_{\text {period }}\right)^{c}-1 .
$$

How can we annualize a return when the holding period return is more than one year? For example, how do we annualize an 18 -month holding period return? Because one year contains two-thirds of 18 -month periods, $c=2 / 3$ in the above equation. For example, an 18 -month return of 20 percent can be annualized as follows:

$$
R_{\text {annual }}=\left(1+R_{18 \text { month }}\right)^{2 / 3}-1=(1+0.20)^{2 / 3}-1=0.1292=12.92 \% .
$$

Similar expressions can be constructed when quarterly or weekly returns are needed for comparison instead of annual returns. In such cases, $c$ is equal to the number of holding periods in a quarter or in a week. For example, assume that you want to convert daily returns to weekly returns or annual returns to weekly returns for comparison between weekly returns. To convert daily returns to weekly returns, $c=5$, assume that there are five trading days in a week. However, daily return calculations can be annualized differently. For example, five can be used for trading-day-based calculations, giving approximately 250 trading days a year; seven can be used on calendar-day-based calculations. Specific methods used conform to specific business practices, market
conventions, and standards. To convert annual returns to weekly returns, $c=1 / 52$. The expressions for annual returns can then be rewritten as expressions for weekly returns as follows:

$$
R_{\text {weekly }}=\left(1+R_{\text {daily }}\right)^{5}-1 ; R_{\text {weekly }}=\left(1+R_{\text {annual }}\right)^{1 / 52}-1 .
$$

One major limitation of annualizing returns is the implicit assumption that returns can be repeated precisely, that is, money can be reinvested repeatedly while earning a similar return. This type of return is not always possible. An investor may earn a return of 5 percent during a week because the market rose sharply that week, but it is highly unlikely that he will earn a return of 5 percent every week for the next 51 weeks, resulting in an annualized return of $1,164.3$ percent $\left(=1.05^{52}-1\right)$. Therefore, it is important to annualize short-term returns with this limitation in mind.

## EXAMPLE 12

## Annualized Returns

An analyst seeks to evaluate three securities she has held in her portfolio for different periods of time.

- Over the past 100 days, Security A has earned a return of 6.2 percent.
- Security B has earned 2 percent over the past four weeks.
- Security C has earned a return of 5 percent over the past three months.

1. Compare the relative performance of the three securities.

## Solution:

To facilitate comparison, the three securities' returns need to be annualized:

- Annualized return for Security A: $R_{S A}=(1+0.062)^{365 / 100}-1=0.2455$ = 24.55\%
- Annualized return for Security B: $R_{S B}=(1+0.02)^{52 / 4}-1=0.2936=$ 29.36\%
- Annualized return for Security C: $R_{S C}=(1+0.05)^{4}-1=0.2155=$ 21.55\%

Security B generated the highest annualized return.

## EXAMPLE 13

## Exchange-Traded Fund Performance

An investor is evaluating the returns of three recently formed exchange-traded funds. Selected return information on the exchange-traded funds (ETFs) is presented in Exhibit 16.

Exhibit 16: ETF Performance Information

| ETF | Time Since Inception | Return Since Inception (\%) |
| :--- | :--- | :--- |
| 1 | 146 days | 4.61 |
| 2 | 5 weeks | 1.10 |
| 3 | 15 months | 14.35 |

1. Which ETF has the highest annualized rate of return?
A. ETF 1
B. ETF 2
C. ETF 3

Solution:
B is correct. The annualized rate of return for the three ETFs are as follows:
ETF 1 annualized return $=\left(1.0461^{365 / 146}\right)-1=11.93 \%$
ETF 2 annualized return $=\left(1.0110^{52 / 5}\right)-1=12.05 \%$
ETF 3 annualized return $=\left(1.1435^{12 / 15}\right)-1=11.32 \%$
Despite having the lowest value for the periodic rate, ETF 2 has the highest annualized rate of return because of the reinvestment rate assumption and the compounding of the periodic rate.

## Continuously Compounded Returns

An important concept is the continuously compounded return associated with a holding period return, such as $R_{1}$. The continuously compounded return associated with a holding period return is the natural logarithm of one plus that holding period return, or equivalently, the natural logarithm of the ending price over the beginning price (the price relative). Note that here we are using $r$ to refer specifically to continuously compounded returns, but other textbooks and sources may use a different notation.

If we observe a one-week holding period return of 0.04, the equivalent continuously compounded return, called the one-week continuously compounded return, is $\ln (1.04)$ $=0.039221$; EUR1.00 invested for one week at 0.039221 continuously compounded gives EUR1.04, equivalent to a 4 percent one-week holding period return.

The continuously compounded return from $t$ to $t+1$ is

$$
r_{t, t+1}=\ln \left(P_{t+1} / P_{t}\right)=\ln \left(1+R_{t, t+1}\right) .
$$

For our example, an asset purchased at time $t$ for a $P_{0}$ of USD30 and the same asset one period later, $t+1$, has a value of $\mathrm{P}_{1}$ of USD34.50 has a continuously compounded return given by $r_{0,1}=\ln \left(P_{1} / P_{0}\right)=\ln \left(1+R_{0,1}\right)=\ln (\mathrm{USD} 34.50 / \mathrm{USD} 30)=\ln (1.15)=0.139762$.

Thus, 13.98 percent is the continuously compounded return from $t=0$ to $t=1$. The continuously compounded return is smaller than the associated holding period return. If our investment horizon extends from $t=0$ to $t=T$, then the continuously compounded return to $T$ is

$$
r_{0, \mathrm{~T}}=\ln \left(P_{T^{T}} / P_{0}\right) .
$$

Applying the exponential function to both sides of the equation, we have $\exp \left(r_{0, \mathrm{~T}}\right)=$ $\exp \left[\ln \left(P_{T} / P_{0}\right)\right]=P_{T} / P_{0}$, so

$$
P_{T}=P_{0} \exp \left(r_{0, \mathrm{~T}}\right) .
$$

We can also express $P_{T} / P_{0}$ as the product of price relatives:

$$
P_{T} / P_{0}=\left(P_{T} / P_{T-1}\right)\left(P_{T-1} / P_{T-2}\right) \ldots\left(P_{1} / P_{0}\right)
$$

Taking logs of both sides of this equation, we find that the continuously compounded return to time $T$ is the sum of the one-period continuously compounded returns:

$$
r_{0, \mathrm{~T}}=r_{T-1, T}+r_{T-2, T-1}+\ldots+r_{0,1}
$$

Using holding period returns to find the ending value of a USD1 investment involves the multiplication of quantities ( $1+$ holding period return). Using continuously compounded returns involves addition (as shown in Equation 14), which is a desirable property of continuously compounded returns and which we will use throughout the curriculum.

## OTHER MAJOR RETURN MEASURES AND THEIR APPLICATIONS

The statistical measures of return discussed in the previous section are generally applicable across a wide range of assets and time periods. Special assets, however, such as mutual funds, and other considerations, such as taxes or inflation, may require more specific return measures.

Although it is not possible to consider all types of special measures, we will discuss the effect of fees (gross versus net returns), taxes (pre-tax and after-tax returns), inflation (nominal and real returns), and the effect of leverage. Many investors use mutual funds or other external entities (i.e., investment vehicles) for investment. In those cases, funds charge management fees and expenses to the investors. Consequently, gross and net-of-fund-expense returns should also be considered. Of course, an investor may be interested in the net-of-expenses after-tax real return, which is in fact what an investor truly receives. We consider these additional return measures in the following sections.

## Gross and Net Return

A gross return is the return earned by an asset manager prior to deductions for management expenses, custodial fees, taxes, or any other expenses that are not directly related to the generation of returns but rather related to the management and administration of an investment. These expenses are not deducted from the gross return because they may vary with the amount of assets under management or may vary because of the tax status of the investor. Trading expenses, however, such as commissions, are accounted for in (i.e., deducted from) the computation of gross return because trading expenses contribute directly to the return earned by the manager. Thus, gross return is an appropriate measure for evaluating and comparing the investment skill of asset managers because it does not include any fees related to the management and administration of an investment.

Net return is a measure of what the investment vehicle (e.g., mutual fund) has earned for the investor. Net return accounts for (i.e., deducts) all managerial and administrative expenses that reduce an investor's return. Because individual investors are most concerned about the net return (i.e., what they actually receive), small mutual funds with a limited amount of assets under management are at a disadvantage compared

