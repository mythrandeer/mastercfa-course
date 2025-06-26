3. How is this estimated linear regression model represented?

## Solution:

The regression model is represented by $\widehat{Y}_{i}=16.5-1.3 X_{i}+\varepsilon_{i}$.
4. What is the pairwise correlation between NPM and RDR?

## Solution:

The pairwise correlation is -0.8421 :
$r=\frac{-39 / 7}{\sqrt{71.5 / 7} \sqrt{30} / 7}=\frac{-5.5714}{(3.1960)(2.0702)}=-0.8421$.

## ASSUMPTIONS OF THE SIMPLE LINEAR REGRESSION MODEL

explain the assumptions underlying the simple linear regression model, and describe how residuals and residual plots indicate if these assumptions may have been violated

We have discussed how to interpret the coefficients in a simple linear regression model. Now we turn to the statistical assumptions underlying this model. Suppose that we have $n$ observations of both the dependent variable, $Y$, and the independent variable, $X$, and we want to estimate the simple linear regression of $Y$ regressed on $X$. We need to make the following four key assumptions to be able to draw valid conclusions from a simple linear regression model:

1. Linearity: The relationship between the dependent variable, $Y$, and the independent variable, $X$, is linear.
2. Homoskedasticity: The variance of the regression residuals is the same for all observations.
3. Independence: The observations, pairs of $Y$ s and $X \mathrm{~s}$, are independent of one another. This implies the regression residuals are uncorrelated across observations.
4. Normality: The regression residuals are normally distributed.

Now we take a closer look at each of these assumptions and introduce the "best practice" of examining residual plots of regression results to identify potential violations of these key assumptions.

## Assumption 1: Linearity

We are fitting a linear model, so we must assume that the true underlying relationship between the dependent and independent variables is linear. If the relationship between the independent and dependent variables is nonlinear in the parameters, estimating that relation with a simple linear regression model will produce invalid results: The model will be biased, because it will under- and overestimate the dependent variable at certain points. For example, $Y_{i}=b_{0} e^{b_{1} X_{i}}+\varepsilon_{i}$ is nonlinear in $b_{1}$, so we should not apply the linear regression model to it. Exhibit 10 shows an example of this exponential
model, with a regression line indicated. You can see that this line does not fit this relationship well: For lower and higher values of $X$, the linear model underestimates the $Y$, whereas for the middle values, the linear model overestimates $Y$.

Exhibit 10: Illustration of Nonlinear Relationship Estimated as a Linear Relationship
![](https://cdn.mathpix.com/cropped/2025_06_02_5878b0dcdfacf2f3c2a2g-2.jpg?height=559&width=920&top_left_y=574&top_left_x=760)

Another implication of this assumption is that the independent variable, $X$, must not be random; that is, it is non-stochastic. If the independent variable is random, there would be no linear relation between the dependent and independent variables. Although we may initially assume that the independent variable in the regression model is not random, that assumption may not always be true.

When we look at the residuals of a model, what we would like to see is that the residuals are random. The residuals should not exhibit a pattern when plotted against the independent variable. As we show in Exhibit 11, the residuals from the Exhibit 10 linear regression do not appear to be random but, rather, they exhibit a relationship with the independent variable, $X$, falling for some range of $X$ and rising in another.

Exhibit 11: Illustration of Residuals in a Nonlinear Relationship Estimated as a Linear Relationship
![](https://cdn.mathpix.com/cropped/2025_06_02_5878b0dcdfacf2f3c2a2g-2.jpg?height=557&width=920&top_left_y=1901&top_left_x=760)

## Assumption 2: Homoskedasticity

Assumption 2, that the variance of the residuals is the same for all observations, is known as the homoskedasticity assumption. In terms of notation, this assumption relates to the squared residuals:

$$
\mathrm{E}\left(\varepsilon_{i}^{2}\right)=\sigma_{\varepsilon}^{2}, i=1, \ldots, n .
$$

If the residuals are not homoskedastic, that is, if the variance of residuals differs across observations, then we refer to this as heteroskedasticity.

Suppose you are examining a time series of short-term interest rates as the dependent variable and inflation rates as the independent variable over 16 years. We may believe that short-term interest rates $(Y)$ and inflation rates $(X)$ should be related (i.e., interest rates are higher with higher rates of inflation). If this time series spans many years, with different central bank actions that force short-term interest rates to be (artificially) low for the last eight years of the series, then it is likely that the residuals in this estimated model will appear to come from two different models. We will refer to the first eight years as Regime 1 (normal rates) and the second eight years as Regime 2 (low rates). If the model fits differently in the two regimes, the residuals and their variances will be different.

You can see this situation in Exhibit 12, which shows a scatter plot with an estimated regression line. The slope of the regression line over all 16 years is 1.1979.

Exhibit 12: Scatter Plot of Interest Rates ( $Y$ ) and Inflation Rates ( $X$ )
![](https://cdn.mathpix.com/cropped/2025_06_02_5878b0dcdfacf2f3c2a2g-3.jpg?height=657&width=988&top_left_y=1303&top_left_x=414)

We plot the residuals of this model in Exhibit 13 against the years. In this plot, we indicate the distance that is two standard deviations from zero (the mean of the residuals) for the first eight years' residuals and then do the same for the second eight years. As you can see, the residuals appear different for the two regimes: the variation in the residuals for the first eight years is much smaller than the variation for the second eight years.

Exhibit 13: Residual Plot for Interest Rates ( $Y$ ) vs. Inflation Rates ( $X$ ) Model
![](https://cdn.mathpix.com/cropped/2025_06_02_5878b0dcdfacf2f3c2a2g-4.jpg?height=730&width=1156&top_left_y=326&top_left_x=639)

Why does this happen? The model seems appropriate, but when we examine the residuals (Exhibit 13), an important step in assessing the model fit, we see that the model fits better in some years compared with others. The difference in variance of residuals between the two regimes is apparent from the much wider band around residuals for Regime 2 (the low-rate period). This indicates a clear violation of the homoskedasticity assumption.

If we estimate a regression line for each regime, we can see that the model for the two regimes is quite different, as we show in Exhibit 14. In the case of Regime 1 (normal rates), the slope is 1.0247 , whereas in Regime 2 (low rates) the slope is -0.2805 . In sum, the clustering of residuals in two groups with much different variances clearly indicates the existence of distinct regimes for the relationship between short-term interest rates and the inflation rate.

## Exhibit 14: Fitted Regression Lines for the Two Regimes

![](https://cdn.mathpix.com/cropped/2025_06_02_5878b0dcdfacf2f3c2a2g-5.jpg?height=711&width=1001&top_left_y=319&top_left_x=402)

## Assumption 3: Independence

We assume that the observations ( $Y$ and $X$ pairs) are uncorrelated with one another, meaning they are independent. If there is correlation between observations (i.e., autocorrelation), they are not independent and the residuals will be correlated. The assumption that the residuals are uncorrelated across observations is also necessary for correctly estimating the variances of the estimated parameters of $b_{0}$ and $b_{1}$ (i.e., $\hat{b}_{0}$ and $\hat{b}_{1}$ ) that we use in hypothesis tests of the intercept and slope, respectively. It is important to examine whether the residuals exhibit a pattern, suggesting a violation of this assumption. Therefore, we need to visually and statistically examine the residuals for a regression model.

Consider the quarterly revenues of a company regressed over 40 quarters, as shown in Exhibit 15, with the regression line included. It is clear that these revenues display a seasonal pattern, an indicator of autocorrelation.

Exhibit 15: Regression of Quarterly Revenues vs. Time (40 Quarters)
![](https://cdn.mathpix.com/cropped/2025_06_02_5878b0dcdfacf2f3c2a2g-6.jpg?height=711&width=1161&top_left_y=319&top_left_x=634)

In Exhibit 16, we plot the residuals from this model and see that there is a pattern. These residuals are correlated, specifically jumping up in Quarter 4 and then falling back the subsequent quarter. In sum, the patterns in both Exhibit 15 and Exhibit 16 indicate a violation of the assumption of independence.

Exhibit 16: Residual Plot for Quarterly Revenues vs. Time Model
![](https://cdn.mathpix.com/cropped/2025_06_02_5878b0dcdfacf2f3c2a2g-6.jpg?height=673&width=1164&top_left_y=1482&top_left_x=632)

## Assumption 4: Normality

The assumption of normality requires that the residuals be normally distributed. This does not mean that the dependent and independent variables must be normally distributed; it only means that the residuals from the model are normally distributed. However, in estimating any model, it is good practice to understand the distribution of
the dependent and independent variables to explore for outliers. An outlier in either or both variables can substantially influence the fitted line such that the estimated model will not fit well for most of the other observations.

With normally distributed residuals, we can test a particular hypothesis about a linear regression model. For large sample sizes, we may be able to drop the assumption of normality by appealing to the central limit theorem; asymptotic theory (which deals with large samples) shows that in many cases, the test statistics produced by standard regression programs are valid even if the model's residuals are not normally distributed.

## QUESTION SET

An analyst is investigating a company's revenues and estimates a simple linear time-series model by regressing revenues against time, where time-1, $2, \ldots, 15$-is measured in years. She plots the company's observed revenues and the estimated regression line, as shown in Exhibit 17. She also plots the residuals from this regression model, as shown in Exhibit 18.

## Exhibit 17: Revenues vs. Time Using Simple Linear Regression

![](https://cdn.mathpix.com/cropped/2025_06_02_5878b0dcdfacf2f3c2a2g-7.jpg?height=684&width=893&top_left_y=1108&top_left_x=459)

## Exhibit 18: Residual Plot for Revenues vs. Time

![](https://cdn.mathpix.com/cropped/2025_06_02_5878b0dcdfacf2f3c2a2g-7.jpg?height=627&width=903&top_left_y=1966&top_left_x=454)

1. Based on Exhibit 17 and Exhibit 18, describe which assumption(s) of simple linear regression the analyst's model may be violating.

## Solution:

The correct model is not linear, as evident from the pattern of the revenues in Exhibit 17. In the earlier years (i.e., 1 and 2 ) and later years (i.e., 14 and 15), the linear model underestimates revenues, whereas for the middle years (i.e., 7-11), the linear model overestimates revenues. Moreover, the curved pattern of residuals in Exhibit 18 indicates potential heteroskedasticity (residuals have unequal variances), lack of independence of observations, and non-normality (a concern given the small sample size of $n=15$ ). In sum, the analyst should be concerned that her model violates all the assumptions governing simple linear regression (linearity, homoskedasticity, independence, and normality).

## HYPOTHESIS TESTS IN THE SIMPLE LINEAR REGRESSION MODEL

calculate and interpret measures of fit and formulate and evaluate tests of fit and of regression coefficients in a simple linear regression

## Analysis of Variance

The simple linear regression model sometimes describes the relationship between two variables quite well, but sometimes it does not. We must be able to distinguish between these two cases to use regression analysis effectively. Remember our goal is to explain the variation of the dependent variable. So, how well has this goal been achieved, given our choice of independent variable?

## Breaking Down the Sum of Squares Total into Its Components

We begin with the sum of squares total and then break it down into two parts: the sum of squares error and the sum of squares regression (SSR). The sum of squares regression is the sum of the squared differences between the predicted value of the dependent variable, $\widehat{Y}_{i}$, based on the estimated regression line, and the mean of the dependent variable, $\bar{Y}$ :

$$
\sum_{i=1}^{n}\left(\widehat{Y}_{i}-\bar{Y}\right)^{2} .
$$

We have already defined the sum of squares total, which is the total variation in $Y$, and the sum of squares error, the unexplained variation in $Y$. Note that the sum of squares regression is the explained variation in $Y$. So, as illustrated in Exhibit 19, SST $=$ SSR + SSE, meaning total variation in $Y$ equals explained variation in $Y$ plus unexplained variation in $Y$.

