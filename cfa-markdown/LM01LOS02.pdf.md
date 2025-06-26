implies that 2.0 percent $(2.5 \%-0.5 \%)$ must represent a default risk premium reflecting Investment 5's relatively higher default risk.
3. Calculate upper and lower limits for the unknown interest rate for Investment $3, r_{3}$.

## Solution:

Investment 3 has liquidity risk and default risk comparable to Investment 2, but with its longer time to maturity, Investment 3 should have a higher maturity premium and offer a higher interest rate than Investment 2 . Therefore, the interest rate on Investment $3, r_{3}$, should thus be above 2.5 percent (the interest rate on Investment 2).
If the liquidity of Investment 3 was high, Investment 3 would match Investment 4 except for Investment 3's shorter maturity. We would then conclude that Investment 3's interest rate should be less than the interest rate offered by Investment 4, which is 4 percent. In contrast to Investment 4, however, Investment 3 has low liquidity. It is possible that the interest rate on Investment 3 exceeds that of Investment 4 despite Investment 3's shorter maturity, depending on the relative size of the liquidity and maturity premiums. However, we would expect $r_{3}$ to be less than 4.5 percent, the expected interest rate on Investment 4 if it had low liquidity ( $4 \%+0.5 \%$, the liquidity premium). Thus, we should expect in the interest rate offered by Investment 3 to be between 2.5 percent and 4.5 percent.

## RATES OF RETURN

calculate and interpret different approaches to return measurement over time and describe their appropriate uses

Financial assets are frequently defined in terms of their return and risk characteristics. Comparison along these two dimensions simplifies the process of building a portfolio from among all available assets. In this lesson, we will compute, evaluate, and compare various measures of return.

Financial assets normally generate two types of return for investors. First, they may provide periodic income through cash dividends or interest payments. Second, the price of a financial asset can increase or decrease, leading to a capital gain or loss.

Some financial assets provide return through only one of these mechanisms. For example, investors in non-dividend-paying stocks obtain their return from price movement only. Other assets only generate periodic income. For example, defined benefit pension plans and retirement annuities make income payments over the life of a beneficiary.

## Holding Period Return

Returns can be measured over a single period or over multiple periods. Single-period returns are straightforward because there is only one way to calculate them. Multiple-period returns, however, can be calculated in various ways and it is important to be aware of these differences to avoid confusion.

A holding period return, $R$, is the return earned from holding an asset for a single specified period of time. The period may be one day, one week, one month, five years, or any specified period. If the asset (e.g., bond, stock) is purchased today, time ( $t=0$ ), at a price of 100 and sold later, say at time ( $t=1$ ), at a price of 105 with no dividends or other income, then the holding period return is 5 percent $[(105-100) / 100)]$. If the asset also pays income of two units at time ( $t=1$ ), then the total return is 7 percent. This return can be generalized and shown as a mathematical expression in which $P$ is the price and $I$ is the income, as follows:

$$
R=\frac{\left(P_{1}-P_{0}\right)+I_{1}}{P_{0}},
$$

where the subscript indicates the time of the price or income; ( $t=0$ ) is the beginning of the period; and ( $t=1$ ) is the end of the period. The following two observations are important.

- We computed a capital gain of 5 percent and an income yield of 2 percent in this example. For ease of illustration, we assumed that the income is paid at time $t=1$. If the income was received before $t=1$, our holding period return may have been higher if we had reinvested the income for the remainder of the period.
- Return can be expressed in decimals (0.07), fractions (7/100), or as a percent (7 percent). They are all equivalent.

A holding period return can be computed for a period longer than one year. For example, an analyst may need to compute a one-year holding period return from three annual returns. In that case, the one-year holding period return is computed by compounding the three annual returns:

$$
R=\left[\left(1+R_{1}\right) \times\left(1+R_{2}\right) \times\left(1+R_{3}\right)\right]-1,
$$

where $R_{1}, R_{2}$, and $R_{3}$ are the three annual returns.

## Arithmetic or Mean Return

Most holding period returns are reported as daily, monthly, or annual returns. When assets have returns for multiple holding periods, it is necessary to normalize returns to a common period for ease of comparison and understanding. There are different methods for aggregating returns across several holding periods. The remainder of this section presents various ways of computing average returns and discusses their applicability.

The simplest way to compute a summary measure for returns across multiple periods is to take a simple arithmetic average of the holding period returns. Thus, three annual returns of -50 percent, 35 percent, and 27 percent will give us an average of 4 percent per year $=\left(\frac{-50 \%+35 \%+27 \%}{3}\right)$. The arithmetic average return is easy to compute and has known statistical properties.

In general, the arithmetic or mean return is denoted by $\bar{R}_{i}$ and given by the following equation for asset $i$, where $R_{i t}$ is the return in period $t$ and $T$ is the total number of periods:

$$
\bar{R}_{i}=\frac{R_{i 1}+R_{i 2}+\ldots+R_{i, T-1}+R_{i T}}{T}=\frac{1}{T} \sum_{t=1}^{T} R_{i t} .
$$

## Geometric Mean Return

The arithmetic mean return assumes that the amount invested at the beginning of each period is the same. In an investment portfolio, however, even if there are no cash flows into or out of the portfolio the base amount changes each year. The previous year's earnings must be added to the beginning value of the subsequent year's investmentthese earnings will be "compounded" by the returns earned in that subsequent year. We can use the geometric mean return to account for the compounding of returns.

A geometric mean return provides a more accurate representation of the growth in portfolio value over a given time period than the arithmetic mean return. In general, the geometric mean return is denoted by $\bar{R}_{G i}$ and given by the following equation for asset $i$ :

$$
\begin{aligned}
& \bar{R}_{G i}=\sqrt[T]{\left(1+R_{i 1}\right) \times\left(1+R_{i 2}\right) \times \ldots \times\left(1+R_{i, T-1}\right) \times\left(1+R_{i T}\right)}-1 \\
& =\sqrt[T]{\prod_{t=1}^{T}\left(1+R_{t}\right)}-1,
\end{aligned}
$$

where $R_{i t}$ is the return in period $t$ and $T$ is the total number of periods.
In the example in the previous section, we calculated the arithmetic mean to be 4.00 percent. Using Equation 4, we can calculate the geometric mean return from the same three annual returns:

$$
\bar{R}_{G i}=\sqrt[3]{(1-0.50) \times(1+0.35) \times(1+0.27)}-1=-0.0500 .
$$

Exhibit 2 shows the actual return for each year and the balance at the end of each year using actual returns.

Exhibit 2: Portfolio Value and Performance

|  | Actual Return for the Year (\%) | Year-End Amount | Year-End Amount Using Arithmetic Return of 4\% | Year-End Amount Using Geometric Return of -5\% |
| :--- | :--- | :--- | :--- | :--- |
| Year 0 |  | EUR1.0000 | EUR1.0000 | EUR1.0000 |
| Year 1 | -50 | 0.5000 | 1.0400 | 0.9500 |
| Year 2 | 35 | 0.6750 | 1.0816 | 0.9025 |
| Year 3 | 27 | 0.8573 | 1.1249 | 0.8574 |

Beginning with an initial investment of EUR1.0000, we will have a balance of EUR0.8573 at the end of the three-year period as shown in the fourth column of Exhibit 2. Note that we compounded the returns because, unless otherwise stated, we earn a return on the balance as of the end of the prior year. That is, we will receive a return of 35 percent in the second year on the balance at the end of the first year, which is only EUR0.5000, not the initial balance of EUR1.0000. Let us compare the balance at the end of the three-year period computed using geometric returns with the balance we would calculate using the 4 percent annual arithmetic mean return from our earlier example. The ending value using the arithmetic mean return is EUR1.1249 ( $=1.0000 \times$ $1.04^{3}$ ). This is much larger than the actual balance at the end of Year 3 of EUR0.8573.

In general, the arithmetic return is biased upward unless each of the underlying holding period returns are equal. The bias in arithmetic mean returns is particularly severe if holding period returns are a mix of both positive and negative returns, as in this example.

We will now look at three examples that calculate holding period returns over different time horizons.

## EXAMPLE 2

## Holding Period Return

1. An investor purchased 100 shares of a stock for USD34.50 per share at the beginning of the quarter. If the investor sold all of the shares for USD30.50 per share after receiving a USD51.55 dividend payment at the end of the quarter, the investor's holding period return is closest to:
A. -13.0 percent.
B. -11.6 percent.
C. -10.1 percent.

## Solution:

C is correct. Applying Equation 2, the holding period return is -10.1 percent, calculated as follows:
$R=(3,050-3,450+51.55) / 3,450=-10.1 \%$.
The holding period return comprised of a dividend yield of 1.49 percent (= $51.55 / 3,450$ ) and a capital loss of -11.59 percent ( $=-400 / 3,450$ ).

## EXAMPLE 3

## Holding Period Return

1. An analyst obtains the following annual rates of return for a mutual fund, which are presented in Exhibit 3.

Exhibit 3: Mutual Fund Performance, 20X8-20X0

| Year | Return (\%) |
| :--- | :--- |
| 20X8 | 14 |
| 20X9 | -10 |
| 20X0 | -2 |

The fund's holding period return over the three-year period is closest to:
A. 0.18 percent.
B. 0.55 percent.
C. 0.67 percent.

Solution:
B is correct. The fund's three-year holding period return is 0.55 percent, calculated as follows:
$R=\left[\left(1+R_{1}\right) \times\left(1+R_{2}\right) \times\left(1+R_{3}\right)\right]-1$,
$R=[(1+0.14)(1-0.10)(1-0.02)]-1=0.0055=0.55 \%$.

## EXAMPLE 4

## Geometric Mean Return

1. An analyst observes the following annual rates of return for a hedge fund, which are presented in Exhibit 4.

Exhibit 4: Hedge Fund Performance, 20X8-20X0

| Year | Return (\%) |
| :--- | :--- |
| 20X8 | 22 |
| 20X9 | -25 |
| 20X0 | 11 |

The fund's geometric mean return over the three-year period is closest to:
A. 0.52 percent.
B. 1.02 percent.
C. 2.67 percent.

## Solution:

A is correct. Applying Equation 4, the fund's geometric mean return over the three-year period is 0.52 percent, calculated as follows:

$$
\begin{aligned}
& \bar{R}_{G}=[(1+0.22)(1-0.25)(1+0.11)]^{(1 / 3)}-1=1.0157^{(1 / 3)}-1=0.0052 \\
& =0.52 \%
\end{aligned}
$$

## EXAMPLE 5

## Geometric and Arithmetic Mean Returns

1. Consider the annual return data for the group of countries in Exhibit 5.

Exhibit 5: Annual Returns for Years 1 to 3 for Selected Countries' Stock Indexes

| Index | 52-Week Return (\%) |  |  | Average 3-Year Return |  |
| :--- | :--- | :--- | :--- | :--- | :--- |
|  | Year 1 | Year 2 | Year 3 | Arithmetic | Geometric |
| Country A | -15.6 | -5.4 | 6.1 | -4.97 | -5.38 |
| Country B | 7.8 | 6.3 | -1.5 | 4.20 | 4.12 |
| Country C | 5.3 | 1.2 | 3.5 | 3.33 | 3.32 |
| Country D | -2.4 | -3.1 | 6.2 | 0.23 | 0.15 |
| Country E | -4.0 | -3.0 | 3.0 | -1.33 | -1.38 |
| Country F | 5.4 | 5.2 | -1.0 | 3.20 | 3.16 |
| Country G | 12.7 | 6.7 | -1.2 | 6.07 | 5.91 |
| Country H | 3.5 | 4.3 | 3.4 | 3.73 | 3.73 |
| Country I | 6.2 | 7.8 | 3.2 | 5.73 | 5.72 |


|  | 52-Week Return (\%) |  |  | Average 3-Year Return |  |  |
| :--- | ---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Index | Year 1 | Year 2 | Year 3 |  | Arithmetic | Geometric |
| Country J | 8.1 | 4.1 | -0.9 |  | 3.77 | 3.70 |
| Country K | 11.5 | 3.4 | 1.2 |  | 5.37 | 5.28 |

Calculate the arithmetic and geometric mean returns over the three years for the following three stock indexes: Country D, Country E, and Country F.

## Solution:

The arithmetic mean returns are as follows:

|  | Annual Return (\%) |  |  | Sum $\sum_{i=1}^{3} R_{i}$ | Arithmetic Mean Return (\%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
|  | Year 1 | Year 2 | Year 3 |  |  |
| Country D | -2.4 | -3.1 | 6.2 | 0.7 | 0.233 |
| Country E | -4.0 | -3.0 | 3.0 | -4.0 | -1.333 |
| Country F | 5.4 | 5.2 | -1.0 | 9.6 | 3.200 |

The geometric mean returns are as follows:

|  | 1 + Return in Decimal Form $\left(1+\mathrm{R}_{\mathrm{t}}\right)$ |  |  | Product T $\prod_{t}\left(1+R_{t}\right)$ | 3rd root $\left[\prod_{t}^{T}\left(1+R_{t}\right)\right]$ | Geometric mean return (\%) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
|  |  |  |  |  |  |  |
|  | Year 1 | Year 2 | Year 3 |  |  |  |
| Country D | 0.976 | 0.969 | 1.062 | 1.00438 | 1.00146 | 0.146 |
| Country E | 0.960 | 0.970 | 1.030 | 0.95914 | 0.98619 | -1.381 |
| Country F | 1.054 | 1.052 | 0.990 | 1.09772 | 1.03157 | 3.157 |

In Example 5, the geometric mean return is less than the arithmetic mean return for each country's index returns. In fact, the geometric mean is always less than or equal to the arithmetic mean with one exception: the two means will be equal is when there is no variability in the observations-that is, when all the observations in the series are the same.

In general, the difference between the arithmetic and geometric means increases with the variability within the sample; the more disperse the observations, the greater the difference between the arithmetic and geometric means. Casual inspection of the returns in Exhibit 5 and the associated graph of means in Exhibit 6 suggests a greater variability for Country A's index relative to the other indexes, and this is confirmed with the greater deviation of the geometric mean return ( -5.38 percent) from the arithmetic mean return ( -4.97 percent). How should the analyst interpret these results?

Exhibit 6: Arithmetic and Geometric Mean Returns for Country Stock Indexes, Years 1 to 3
![](https://cdn.mathpix.com/cropped/2025_06_02_02b98e9b6c3a430f6429g-07.jpg?height=708&width=1061&top_left_y=367&top_left_x=689)

The geometric mean return represents the growth rate or compound rate of return on an investment. One unit of currency invested in a fund tracking the Country B index at the beginning of Year 1 would have grown to $(1.078)(1.063)(0.985)=1.128725$ units of currency, which is equal to 1 plus Country B's geometric mean return of 4.1189 percent compounded over three periods: $[1+0.041189]^{3}=1.128725$. This math confirms that the geometric mean is the compound rate of return. With its focus on the actual return of an investment over a multiple-period horizon, the geometric mean is of key interest to investors. The arithmetic mean return, focusing on average single-period performance, is also of interest. Both arithmetic and geometric means have a role to play in investment management, and both are often reported for return series.

For reporting historical returns, the geometric mean has considerable appeal because it is the rate of growth or return we would have to earn each year to match the actual, cumulative investment performance. Suppose we purchased a stock for EUR100 and two years later it was worth EUR100, with an intervening year at EUR200. The geometric mean of 0 percent is clearly the compound rate of growth during the two years, which we can confirm by compounding the returns: $[(1+1.00)(1-0.50)]^{1 / 2}$ $-1=0 \%$. Specifically, the ending amount is the beginning amount times $\left(1+R_{G}\right)^{2}$.

However, the arithmetic mean, which is $[100 \%+-50 \%] / 2=25 \%$ in the previous example, can distort our assessment of historical performance. As we noted, the arithmetic mean is always greater than or equal to the geometric mean. If we want to estimate the average return over a one-period horizon, we should use the arithmetic mean because the arithmetic mean is the average of one-period returns. If we want to estimate the average returns over more than one period, however, we should use the geometric mean of returns because the geometric mean captures how the total returns are linked over time.

## The Harmonic Mean

The harmonic mean, $\bar{X}_{H}$, is another measure of central tendency. The harmonic mean is appropriate in cases in which the variable is a rate or a ratio. The terminology "harmonic" arises from its use of a type of series involving reciprocals known as a harmonic series.

Harmonic Mean Formula. The harmonic mean of a set of observations $X_{1}, X_{2}$, ..., $\mathrm{X}_{\mathrm{n}}$ is:

$$
\bar{X}_{H}=\frac{n}{\sum_{i=1}^{n}\left(1 / X_{i}\right)},
$$

with $\mathrm{X}_{\mathrm{i}}>0$ for $i=1,2, \ldots, n$.
The harmonic mean is the value obtained by summing the reciprocals of the observations,

$$
\sum_{i=1}^{n}\left(1 / X_{i}\right),
$$

the terms of the form $1 / \mathrm{X}_{\mathrm{i}}$, and then averaging their sum by dividing it by the number of observations, $n$, and, then finally, taking the reciprocal of that average,

$$
\frac{n}{\sum_{i=1}^{n}\left(1 / X_{i}\right)} .
$$

The harmonic mean may be viewed as a special type of weighted mean in which an observation's weight is inversely proportional to its magnitude. For example, if there is a sample of observations of $1,2,3,4,5,6$, and 1,000 , the harmonic mean is 2.8560 . Compared to the arithmetic mean of 145.8571, we see the influence of the outlier (the 1,000 ) to be much less than in the case of the arithmetic mean. So, the harmonic mean is quite useful as a measure of central tendency in the presence of outliers.

The harmonic mean is used most often when the data consist of rates and ratios, such as P/Es. Suppose three peer companies have P/Es of 45, 15, and 15. The arithmetic mean is 25 , but the harmonic mean, which gives less weight to the $\mathrm{P} / \mathrm{E}$ of 45 , is 19.3 .

The harmonic mean is a relatively specialized concept of the mean that is appropriate for averaging ratios ("amount per unit") when the ratios are repeatedly applied to a fixed quantity to yield a variable number of units. The concept is best explained through an illustration. A well-known application arises in the investment strategy known as cost averaging, which involves the periodic investment of a fixed amount of money. In this application, the ratios we are averaging are prices per share at different purchase dates, and we are applying those prices to a constant amount of money to yield a variable number of shares. An illustration of the harmonic mean to cost averaging is provided in Example 6.

## EXAMPLE 6

## Cost Averaging and the Harmonic Mean

1. Suppose an investor invests EUR1,000 each month in a particular stock for $n=2$ months. The share prices are EUR10 and EUR15 at the two purchase dates. What was the average price paid for the security?

## Solution:

Purchase in the first month $=$ EUR1,000/EUR10 $=100$ shares.
Purchase in the second month $=$ EUR 1,000 /EUR $15=66.67$ shares.
The investor purchased a total of 166.67 shares for EUR2,000, so the average price paid per share is EUR2,000/166.67 = EUR12.
The average price paid is in fact the harmonic mean of the asset's prices at the purchase dates. Using Equation 5, the harmonic mean price is $2 /[(1 / 10)$ $+(1 / 15)]=$ EUR12. The value EUR12 is less than the arithmetic mean purchase price (EUR10 + EUR15)/2 = EUR12.5.

Because they use the same data but involve different progressions in their respective calculations, the arithmetic, geometric, and harmonic means are mathematically related to one another. We will not go into the proof of this relationship, but the basic result follows:

Arithmetic mean $\times$ Harmonic mean $=(\text { Geometric mean })^{2}$.
Unless all the observations in a dataset are the same value, the harmonic mean is always less than the geometric mean, which, in turn, is always less than the arithmetic mean.

The harmonic mean only works for non-negative numbers, so when working with returns that are expressed as positive or negative percentages, we first convert the returns into a compounding format, assuming a reinvestment, as $(1+R)$, as was done in the geometric mean return calculation, and then calculate ( $1+$ harmonic mean), and subtract 1 to arrive at the harmonic mean return.

## EXAMPLE 7

## Calculating the Arithmetic, Geometric, and Harmonic Means for P/Es

Each year in December, a securities analyst selects her 10 favorite stocks for the next year. Exhibit 7 presents the P/Es, the ratio of share price to projected earnings per share (EPS), for her top 10 stock picks for the next year.

Exhibit 7: Analyst's 10 Favorite Stocks for Next Year

| Stock | P/E |
| :--- | :--- |
| Stock 1 | 22.29 |
| Stock 2 | 15.54 |
| Stock 3 | 9.38 |
| Stock 4 | 15.12 |
| Stock 5 | 10.72 |
| Stock 6 | 14.57 |
| Stock 7 | 7.20 |
| Stock 8 | 7.97 |
| Stock 9 | 10.34 |
| Stock 10 | 8.35 |

1. Calculate the arithmetic mean $\mathrm{P} / \mathrm{E}$ for these 10 stocks.

## Solution:

The arithmetic mean is calculated as: $121.48 / 10=12.1480$.
2. Calculate the geometric mean $\mathrm{P} / \mathrm{E}$ for these 10 stocks.

## Solution:

The geometric mean $\mathrm{P} / \mathrm{E}$ is calculated as:

$$
\begin{aligned}
& \frac{\bar{P}}{E}_{G i}=\sqrt[10]{\frac{P}{E_{1}} \times \frac{P}{E_{2}} \times \ldots \times \frac{P}{E_{9}} \times \frac{P}{E_{10}}} \\
& =\sqrt[10]{22.29 \times 15.54 \ldots \times 10.34 \times 8.35}
\end{aligned}
$$

$=\sqrt[10]{38,016,128,040}=11.4287$.
The geometric mean is 11.4287 . This result can also be obtained as:
$\frac{\bar{P}}{E}_{G i}=\mathrm{e}^{\frac{\ln (22.29 \times 15.54 \ldots \times 10.34 \times 8.35)}{10}}=\mathrm{e}^{\frac{\ln (38,016,128,040)}{10}}=e^{24.3613 / 10}=11.4287$.
3. Calculate the harmonic mean P/E for the 10 stocks.

## Solution:

The harmonic mean is calculated as:
$\bar{X}_{H}=\frac{n}{\sum_{i=1}^{n}\left(1 / X_{i}\right)}$,
$\bar{X}_{H}=\frac{10}{\left(\frac{1}{22.29}\right)+\left(\frac{1}{15.54}\right)+\ldots+\left(\frac{1}{10.34}\right)+\left(\frac{1}{8.35}\right)}$,
$\bar{X}_{H}=10 / 0.9247=10.8142$.
In finance, the weighted harmonic mean is used when averaging rates and other multiples, such as the P/E ratio, because the harmonic mean gives equal weight to each data point, and reduces the influence of outliers. These calculations can be performed using Excel:

- To calculate the arithmetic mean or average return, the =AVERAGE(return1, return2, ... ) function can be used.
- To calculate the geometric mean return, the =GEOMEAN(return1, return2, ... ) function can be used.
- To calculate the harmonic mean return, the =HARMEAN(return1, return2, ... ) function can be used.

In addition to arithmetic, geometric, and harmonic means, two other types of means can be used. Both the trimmed and the winsorized means seek to minimize the impact of outliers in a dataset. Specifically, the trimmed mean removes a small defined percentage of the largest and smallest values from a dataset containing our observation before calculating the mean by averaging the remaining observations.

A winsorized mean replaces the extreme observations in a dataset to limit the effect of the outliers on the calculations. The winsorized mean is calculated after replacing extreme values at both ends with the values of their nearest observations, and then calculating the mean by averaging the remaining observations.

However, the key question is: Which mean to use in what circumstances? The choice of which mean to use depends on many factors, as we describe in Exhibit 8:

- Are there outliers that we want to include?
- Is the distribution symmetric?
- Is there compounding?
- Are there extreme outliers?


## Exhibit 8: Deciding Which Measure to Use

![](https://cdn.mathpix.com/cropped/2025_06_02_02b98e9b6c3a430f6429g-11.jpg?height=801&width=727&top_left_y=326&top_left_x=851)

## QUESTION SET

A fund had the following returns over the past 10 years:

## Exhibit 9: 10-Year Returns

| Year | Return |
| :--- | :--- |
| 1 | 4.5\% |
| 2 | 6.0\% |
| 3 | 1.5\% |
| 4 | -2.0\% |
| 5 | 0.0\% |
| 6 | 4.5\% |
| 7 | 3.5\% |
| 8 | 2.5\% |
| 9 | 5.5\% |
| 10 | 4.0\% |

1. The arithmetic mean return over the 10 years is closest to:
A. 2.97 percent.
B. 3.00 percent.
C. 3.33 percent.

## Solution:

B is correct. The arithmetic mean return is calculated as follows:

$$
\bar{R}=30.0 \% / 10=3.0 \% .
$$

2. The geometric mean return over the 10 years is closest to:
A. 2.94 percent.
B. 2.97 percent.
C. 3.00 percent.

## Solution:

B is correct. The geometric mean return is calculated as follows:

$$
\begin{aligned}
& \bar{R}_{G}=\sqrt[10]{(1+0.045) \times(1+0.06) \times \ldots \times(1+0.055) \times(1+0.04)}-1 \\
& \bar{R}_{G}=\sqrt[10]{1.3402338}-1=2.9717 \%
\end{aligned}
$$

## MONEY-WEIGHTED AND TIME-WEIGHTED RETURN

compare the money-weighted and time-weighted rates of return and evaluate the performance of portfolios based on these measures

The arithmetic and geometric return computations do not account for the timing of cash flows into and out of a portfolio. For example, suppose an investor experiences the returns shown in Exhibit 2. Instead of only investing EUR1.0 at the start (Year 0) as was the case in Exhibit 2, suppose the investor had invested EUR10,000 at the start, EUR1,000 in Year 1, and EUR1,000 in Year 2. In that case, the return of -50 percent in Year 1 significantly hurts her given the relatively large investment at the start. Conversely, if she had invested only EUR100 at the start, the absolute effect of the -50 percent return on the total return is drastically reduced.

## Calculating the Money Weighted Return

The money-weighted return accounts for the money invested and provides the investor with information on the actual return she earns on her investment. The money-weighted return and its calculation are similar to the internal rate of return and a bond's yield to maturity. Amounts invested are cash outflows from the investor's perspective and amounts returned or withdrawn by the investor, or the money that remains at the end of an investment cycle, is a cash inflow for the investor.

For example, assume that an investor invests EUR100 in a mutual fund at the beginning of the first year, adds another EUR950 at the beginning of the second year, and withdraws EUR350 at the end of the second year. The cash flows are presented in Exhibit 10.

