C. greater than 2.85 percent.

Solution:
A is correct. The higher the dispersion of a distribution, the greater the difference between the arithmetic mean and the geometric mean.

## MEASURES OF SHAPE OF A DISTRIBUTION

interpret and evaluate measures of skewness and kurtosis to address an investment problem

Mean and variance may not adequately describe an investment's distribution of returns. In calculations of variance, for example, the deviations around the mean are squared, so we do not know whether large deviations are likely to be positive or negative. We need to go beyond measures of central tendency, location, and dispersion to reveal other important characteristics of the distribution. One important characteristic of interest to analysts is the degree of symmetry in return distributions.

If a return distribution is symmetrical about its mean, each side of the distribution is a mirror image of the other. Thus, equal loss and gain intervals exhibit the same frequencies.

One of the most important distributions is the normal distribution, depicted in Exhibit 16. This symmetrical, bell-shaped distribution plays a central role in the mean-variance model of portfolio selection; it is also used extensively in financial risk management. The normal distribution has the following characteristics:

- Its mean, median, and mode are equal.
- It is completely described by two parameters-its mean and variance (or standard deviation).

Exhibit 16: The Normal Distribution
![](https://cdn.mathpix.com/cropped/2025_06_02_11c2b62ca4e7b7d62ea5g-1.jpg?height=459&width=778&top_left_y=1798&top_left_x=828)

Other distributions may require more information than just the mean and variance to characterize their shape.

## Skewness

A distribution that is not symmetrical is termed skewed. A return distribution with positive skew has frequent small losses and a few extreme gains. A return distribution with negative skew has frequent small gains and a few extreme losses. Panel A of Exhibit 17 illustrates a continuous positively skewed distribution, which has a long tail on its right side; Panel B illustrates a continuous negatively skewed distribution, which has a long tail on its left side.

## Exhibit 17: Properties of Skewed Distributions

A. Positively Skewed

Density of Probability
![](https://cdn.mathpix.com/cropped/2025_06_02_11c2b62ca4e7b7d62ea5g-2.jpg?height=416&width=1034&top_left_y=936&top_left_x=388)
B. Negatively Skewed

Density of Probability
![](https://cdn.mathpix.com/cropped/2025_06_02_11c2b62ca4e7b7d62ea5g-2.jpg?height=494&width=1036&top_left_y=1507&top_left_x=390)

For a continuous positively skewed unimodal distribution, the mode is less than the median, which is less than the mean. For the continuous negatively skewed unimodal distribution, the mean is less than the median, which is less than the mode. For a given expected return and standard deviation, investors should be attracted by a positive skew because the mean return lies above the median. Relative to the mean return, positive skew amounts to limited, though frequent, downside returns compared with somewhat unlimited, but less frequent, upside returns.

Skewness is the name given to a statistical measure of skew. (The word "skewness" is also sometimes used interchangeably for "skew.") Like variance, skewness is computed using each observation's deviation from its mean. Skewness (sometimes
referred to as relative skewness) is computed as the average cubed deviation from the mean, standardized by dividing by the standard deviation cubed to make the measure free of scale.

Cubing, unlike squaring, preserves the sign of the deviations from the mean. If a distribution is positively skewed with a mean greater than its median, then more than half of the deviations from the mean are negative and less than half are positive. However, for the sum of the cubed deviations to be positive, the losses must be small and likely and the gains less likely but more extreme. Therefore, if skewness is positive, the average magnitude of positive deviations is larger than the average magnitude of negative deviations.

The approximation for computing sample skewness when $n$ is large (100 or more) is:

$$
\text { Skewness } \approx\left(\frac{1}{n}\right) \frac{\sum_{i=1}^{n}\left(X_{i}-\bar{X}\right)^{3}}{s^{3}} .
$$

As you will learn later in the curriculum, different investment strategies may introduce different types and amounts of skewness into returns.

## Kurtosis

Another way in which a return distribution might differ from a normal distribution is its relative tendency to generate large deviations from the mean. Most investors would perceive a greater chance of extremely large deviations from the mean as higher risk.

Kurtosis is a measure of the combined weight of the tails of a distribution relative to the rest of the distribution-that is, the proportion of the total probability that is outside of, say, 2.5 standard deviations of the mean. A distribution that has fatter tails than the normal distribution is referred to as leptokurtic or fat-tailed; a distribution that has thinner tails than the normal distribution is referred to as being platykurtic or thin-tailed; and a distribution similar to the normal distribution as it concerns relative weight in the tails is called mesokurtic. A fat-tailed (thin-tailed) distribution tends to generate more frequent (less frequent) extremely large deviations from the mean than the normal distribution.

Exhibit 18 illustrates a distribution with fatter tails than the normal distribution. By construction, the fat-tailed and normal distributions in Exhibit 18 have the same mean, standard deviation, and skewness. Note that this fat-tailed distribution is more likely than the normal distribution to generate observations in the tail regions defined by the intersection of the distribution lines near a standard deviation of about $\pm 2.5$. This fat-tailed distribution is also more likely to generate observations that are near the mean, defined here as the region $\pm 1$ standard deviation around the mean. However, to ensure probabilities sum to 1 , this distribution generates fewer observations in the regions between the central region and the two tail regions.

Exhibit 18: Fat-Tailed Distribution Compared to the Normal Distribution
![](https://cdn.mathpix.com/cropped/2025_06_02_11c2b62ca4e7b7d62ea5g-4.jpg?height=538&width=828&top_left_y=319&top_left_x=491)

The calculation for kurtosis involves finding the average of deviations from the mean raised to the fourth power and then standardizing that average by dividing by the standard deviation raised to the fourth power. A normal distribution has kurtosis of 3.0, so a fat-tailed distribution has a kurtosis above 3.0 and a thin-tailed distribution has a kurtosis below 3.0.

Excess kurtosis is the kurtosis relative to the normal distribution. For a large sample size ( $n=100$ or more), sample excess kurtosis ( $\mathrm{K}_{\mathrm{E}}$ ) is approximately as follows:

$$
K_{E} \approx\left[\left(\frac{1}{n}\right) \frac{\sum_{i=1}^{n}\left(X_{i}-\bar{X}\right)^{4}}{s^{4}}\right]-3
$$

As with skewness, this measure is free of scale. Many statistical packages report estimates of sample excess kurtosis, labeling this as simply "kurtosis."

Excess kurtosis thus characterizes kurtosis relative to the normal distribution. A normal distribution has excess kurtosis equal to 0 . A fat-tailed distribution has excess kurtosis greater than 0, and a thin-tailed distribution has excess kurtosis less than 0. A return distribution with positive excess kurtosis-a fat-tailed return distribution-has more frequent extremely large deviations from the mean than a normal distribution.

Exhibit 19: Summary of Kurtosis

| If kurtosis is ... | then excess kurtosis is ... | Therefore, the distribution is ... | And we refer to the distribution as being ... |
| :--- | :--- | :--- | :--- |
| above 3.0 | above 0 | fatter-tailed than the normal distribution. | fat-tailed (leptokurtic) |
| equal to 3.0 | equal to 0 | similar in tails to the normal distribution. | mesokurtic |
| less than 3.0 | less than 0 | thinner-tailed than the normal distribution. | thin-tailed (platykurtic) |

Most equity return series have been found to be fat-tailed. If a return distribution is fat-tailed and we use statistical models that do not account for that distribution, then we will underestimate the likelihood of very bad or very good outcomes. Example 6 revisits the EAA Equity Index from the earlier Example 1 and quantifies the shape of it return distribution.

## EXAMPLE 6

## Skewness and Kurtosis of EAA Equity Index Daily Returns

Consider the statistics in Exhibit 20 for the EAA Equity Index:

Exhibit 20: Properties of Skewed Distributions

|  | Daily Return (\%) |
| :--- | :--- |
| Arithmetic mean | 0.0347 |
| Standard deviation | 0.8341 |
|  | Measure of Symmetry |
| Skewness | -0.4260 |
| Excess kurtosis | 3.7962 |

The returns reflect negative skewness, which is illustrated in Exhibit 21 by comparing the distribution of the daily returns with a normal distribution with the same mean and standard deviation.

## Exhibit 21: Negative Skewness

![](https://cdn.mathpix.com/cropped/2025_06_02_11c2b62ca4e7b7d62ea5g-5.jpg?height=529&width=768&top_left_y=1443&top_left_x=830)

Using both the statistics and the graph, we see the following:

- The distribution is negatively skewed, as indicated by the negative calculated skewness of -0.4260 and the influence of observations below the mean of 0.0347 percent.
- The highest frequency of returns occurs within the 0.0 to 0.5 standard deviations from the mean (i.e., the mode is greater than the mean as the positive returns are offset by extreme negative deviations).
- The distribution is fat-tailed, as indicated by the positive excess kurtosis of 3.7962. In Exhibit 21, we can see fat tails, a concentration of returns around the mean, and fewer observations in the regions between the central region and the two-tail regions.

To understand the trading liquidity of a stock, investors often look at the distribution of the daily trading volume for a stock. Analyzing the daily volume can provide insights about the interest in the stock, what factors may drive interest in the stock as well as whether the market can absorb a large trade in the stock. The latter may be of interest to investors interested in either establishing or exiting a large position in the particular stock.

## INTERPRETING SKEWNESS AND KURTOSIS

Consider the daily trading volume for a stock for one year, as shown in Exhibit 22. In addition to the count of observations within each bin or interval, the number of observations anticipated based on a normal distribution (given the sample arithmetic average and standard deviation) is provided as well. The average trading volume per day for the stock during the year was 8.6 million shares, and the standard deviation was 4.9 million shares.

Exhibit 22: Histogram of Daily Trading Volume for a Stock for One Year
![](https://cdn.mathpix.com/cropped/2025_06_02_11c2b62ca4e7b7d62ea5g-6.jpg?height=736&width=1080&top_left_y=1047&top_left_x=368)

1. Would the distribution be characterized as being skewed? If so, what could account for this situation?

## Solution:

The distribution appears to be skewed to the right, or positively skewed.
This is likely due to: (1) no possible negative trading volume on a given trading day, so the distribution is truncated at zero; and (2) greater-than-typical trading occurring relatively infrequently, such as when there are compa-ny-specific announcements.
The actual skewness for this distribution is 2.1090 , which supports this interpretation.
2. Does the distribution displays kurtosis? Explain.

## Solution:

The distribution appears to have excess kurtosis, with a right-side fat tail and with maximum shares traded in the 4.6 to 6.1 million range, exceeding what
is expected if the distribution was normally distributed. There are also fewer observations than expected between the central region and the tail.
The actual excess kurtosis for this distribution is 5.2151, which supports this interpretation.

## QUESTION SET

1. An analyst calculates the excess kurtosis of a stock's returns as -0.75. From this information, the analyst should conclude that the distribution of returns is:
A. normally distributed.
B. fat-tailed compared to the normal distribution.
C. thin-tailed compared to the normal distribution.

Solution:
C is correct. The distribution is thin-tailed relative to the normal distribution because the excess kurtosis is less than zero.

Use Exhibit 23 to answer questions 2-4.
An analyst examined a cross-section of annual returns for 252 stocks and calculated the following statistics:

Exhibit 23: Cross-Section of Annual Returns

| Arithmetic Average | 9.986\% |
| :--- | :--- |
| Geometric Mean | 9.909\% |
| Variance | 0.001723 |
| Skewness | 0.704 |
| Excess Kurtosis | 0.503 |

2. The coefficient of variation (CV) is closest to:
A. 0.02.
B. 0.42 .
C. 2.41.

Solution:
B is correct. The CV is the ratio of the standard deviation to the arithmetic average, or $\sqrt{0.001723} / 0.09986=0.416$.
3. This distribution is best described as:
A. negatively skewed.
B. having no skewness.
C. positively skewed.

Solution:
C is correct. The skewness is positive, so it is right-skewed (positively skewed).
4. Compared to the normal distribution, this sample's distribution is best described as having tails of the distribution with:
A. less probability than the normal distribution.
B. the same probability as the normal distribution.
C. more probability than the normal distribution.

Solution:
C is correct. The excess kurtosis is positive, indicating that the distribution is "fat-tailed"; therefore, there is more probability in the tails of the distribution relative to the normal distribution.

## CORRELATION BETWEEN TWO VARIABLES

interpret correlation between two variables to address an investment problem

## Scatter Plot

A scatter plot is a useful tool for displaying and understanding potential relationships between two variables. Suppose an analyst is interested in the relative performance of two sectors, information technology (IT) and utilities, compared to the market index over a specific five-year period. The analyst has obtained the sector and market index returns for each month over the five years under investigation. Exhibit 24 presents a scatterplot of returns for the IT sector index versus the S\&P 500, and Exhibit 25 presents a scatterplot of returns for the utilities sector index versus the S\&P 500.

Tight (loose) clustering signals a potentially stronger (weaker) relationship between the two variables.

