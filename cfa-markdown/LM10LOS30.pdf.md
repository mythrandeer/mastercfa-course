- The standard error of the estimate is a measure of the distance between the observed values of the dependent variable and those predicted from the estimated regression. The smaller this value, the better the fit of the model.
- The standard error of the forecast is used to provide an interval estimate around the estimated regression line. It is necessary because the regression line does not describe the relationship between the dependent and independent variables perfectly.
- The simple linear regression model on non-linear data can be adjusted by using different functional forms that transform the dependent or independent variables.
- Three common functional forms for transforming data include the loglin model, the lin-log model, and the log-log model.
- The key to fitting the appropriate functional form of a simple linear regression is examining the goodness-of-fit measures-the coefficient of determination ( $\mathrm{R}^{2}$ ), the $F$-statistic, and the standard error of the estimate $\left(\mathrm{s}_{\mathrm{e}}\right)$-as well as examining whether there are patterns in the residuals.


## ESTIMATION OF THE SIMPLE LINEAR REGRESSION MODEL

describe a simple linear regression model, how the least squares criterion is used to estimate regression coefficients, and the interpretation of these coefficients

## Introduction to Linear Regression

Suppose an analyst is examining the return on assets (ROA) for an industry and observes the ROA for the six companies shown in Exhibit 1. The average of these ROAs is 12.5 percent, but the range is from 4 percent to 20 percent.

Exhibit 1: Return on Assets of Selected Companies

| Company | ROA (\%) |
| :--- | :--- |
| A | 6.0 |
| B | 4.0 |
| C | 15.0 |
| D | 20.0 |
| E | 10.0 |
| F | 20.0 |

In trying to understand why the ROAs differ among these companies, we could look at why the ROA of Company A differs from that of Company B, why the ROA of Company A differs from that of Company D, why the ROA of Company F differs from that of Company C, and so on, comparing each pair of ROAs. We can simplify this exercise by instead comparing each company's ROA to the mean ROA of 12.5 percent. To do this, we look at the sum of the squared deviations of the observations from the mean to capture variations in ROA from their mean. Let $Y$ represent the variable that we would like to explain, which in this case is the ROA. Let $Y_{i}$ represent an observation of a company's ROA, and let $\bar{Y}$ represent the mean ROA for the sample of size $n$. We can describe the variation of the ROAs as follows:

$$
\text { Variation of } Y=\sum_{i=1}^{n}\left(Y_{i}-\bar{Y}\right)^{2}
$$

Our goal is to understand what drives these ROAs or, in other words, what explains the variation of $Y$. The variation of $Y$ is often referred to as the sum of squares total (SST), or the total sum of squares.

We now ask whether it is possible to explain the variation of the ROA using another variable that also varies among the companies; note that if this other variable is constant or random, it would not explain the ROA differences. Suppose the analyst believes that the capital expenditures in the previous period, scaled by the prior period's beginning property, plant, and equipment, are a driver for the ROA variable. Let us represent this scaled capital expenditures variable as CAPEX, as we show in Exhibit 2.

## Exhibit 2: Return on Assets and Scaled Capital Expenditures

| Company | ROA (\%) | CAPEX (\%) |
| :--- | :--- | :--- |
| A | 6.0 | 0.7 |
| B | 4.0 | 0.4 |
| C | 15.0 | 5.0 |
| D | 20.0 | 10.0 |
| E | 10.0 | 8.0 |
| F | 20.0 | 12.5 |
| Arithmetic mean | 12.5 | 6.1 |

Let $X$ represent the explanatory variable, in this case, CAPEX. Then $X_{i}$ will represent an observation of our explanatory variable, and $\bar{X}$ will represent the mean value for the explanatory variable, that is, the mean of all of our CAPEX values. The variation of $X$ is calculated as follows:

$$
\text { Variation of } X=\sum_{i=1}^{n}\left(X_{i}-\bar{X}\right)^{2}
$$

We can see the relation between ROA and CAPEX in the scatter plot (or scattergram) in Exhibit 3, which represents the two variables in two dimensions. Typically, we present the variable whose variation we want to explain along the vertical axis and the variable whose variation we want to use to explain that variation along the horizontal axis. Each point in this scatter plot represents a paired observation that consists of CAPEX and ROA. From a casual visual inspection, a positive relation is apparent between ROA and CAPEX: Companies with higher CAPEX tend to have a higher ROA.

Exhibit 3: Scatter Plot of ROA and CAPEX
![](https://cdn.mathpix.com/cropped/2025_06_02_26925517943c41f8f8b8g-03.jpg?height=608&width=985&top_left_y=319&top_left_x=413)

In the ROA example, we use the capital expenditures to explain the ROAs. We refer to the variable whose variation is being explained as the dependent variable, or the explained variable; it is typically denoted by $Y$. We refer to the variable whose variation is being used to explain the variation of the dependent variable as the independent variable, or the explanatory variable; it is typically denoted by $X$. Therefore, in our example, the ROA is the dependent variable ( $Y$ ) and CAPEX is the independent variable ( $X$ ).

A common method used to relate the dependent and independent variables is through the estimation of a linear relationship, which implies describing the relation between the two variables as represented by a straight line. If we have only one independent variable, we refer to the method as simple linear regression (SLR), or linear regression; if we have more than one independent variable, we refer to the method as multiple regression.

Linear regression allows us to test hypotheses about the relationship between two variables by quantifying the strength of the relationship between the two variables and to use one variable to make predictions about the other variable.

## IDENTIFYING THE DEPENDENT AND INDEPENDENT VARIABLES IN A REGRESSION

![](https://cdn.mathpix.com/cropped/2025_06_02_26925517943c41f8f8b8g-03.jpg?height=107&width=102&top_left_y=1784&top_left_x=1391)

An analyst is researching the relationship between corporate earnings growth and stock returns. Specifically, she is interested in whether earnings revisions are correlated with stock price returns in the same period. She collects five years of monthly data on earnings per share (EPS) revisions and stock price returns for a sample of 100 companies.

1. What are the dependent and independent variables in her model?

## Solution:

The dependent variable is monthly stock price returns, and the independent variable is EPS revisions. In the analyst's model, the variation in monthly stock price returns is being explained by the variation in EPS revisions.

## Estimating the Parameters of a Simple Linear Regression

## The Basics of Simple Linear Regression

Regression analysis begins with the dependent variable, the variable whose variation you are seeking to explain. The independent variable is the variable whose variation you are using to explain changes in the dependent variable. For example, you might try to explain small-stock returns (the dependent variable) using returns to the S\&P 500 Index (the independent variable). Or you might try to explain a country's inflation rate (the dependent variable) as a function of growth in its money supply (the independent variable).

As the name implies, linear regression assumes a linear relationship between the dependent and the independent variables. The goal is to fit a line to the observations on $Y$ and $X$ to minimize the squared deviations from the line; this is the least squares criterion-hence, the name least squares regression. Because of its common use, linear regression is often referred to as ordinary least squares (OLS) regression.

Using notation, the linear relation between the dependent and independent variables is described as follows:

$$
Y_{i}=b_{0}+b_{1} X_{i}+\varepsilon_{i}, i=1, \ldots, n .
$$

Equation 3 is a model that does not require that every ( $\mathrm{X}, \mathrm{Y}$ ) pair for an observation fall on the regression line. This equation states that the dependent variable, $Y$, is equal to the intercept, $b_{0}$, plus a slope coefficient, $b_{1}$, multiplied by the independent variable, $X$, plus an error term, $\varepsilon$. The error term, or simply the error, represents the difference between the observed value of $Y$ and that expected from the true underlying population relation between $Y$ and $X$. We refer to the intercept, $b_{0}$, and the slope coefficient, $b_{1}$, as the regression coefficients? A way that we often describe this simple linear regression relation is that $Y$ is regressed on $X$.

Consider the ROA and CAPEX scatter diagram from Exhibit 3, which we elaborate on in Exhibit 4 by including the fitted regression line. This line represents the average relationship between ROA and CAPEX; not every observation falls on the line, but the line describes the mean relation between ROA and CAPEX.

Exhibit 4: Fitted Regression Line of ROA and CAPEX
![](https://cdn.mathpix.com/cropped/2025_06_02_26925517943c41f8f8b8g-04.jpg?height=660&width=974&top_left_y=1776&top_left_x=730)

## Estimating the Regression Line

We cannot observe the population parameter values $b_{0}$ and $b_{1}$ in a regression model. Instead, we observe only $\hat{b}_{0}$ and $\hat{b}_{1}$, which are estimates (as indicated by the "hats" above the coefficients) of the population parameters based on the sample. Thus, predictions must be based on the parameters' estimated values, and testing is based on estimated values in relation to the hypothesized population values.

We estimate the regression line as the line that best fits the observations. In simple linear regression, the estimated intercept, $\hat{b}_{0}$, and slope, $\hat{b}_{1}$, are such that the sum of the squared vertical distances from the observations to the fitted line is minimized. The focus is on the sum of the squared differences between the observations on $\mathrm{Y}_{\mathrm{i}}$ and the corresponding estimated value, $\widehat{Y}_{i}$, on the regression line.

We represent the value of the dependent variable for the $i$ th observation that falls on the line as $\widehat{Y}_{i}$, which is equal to $\hat{b}_{0}+\widehat{b}_{1} X_{i}$. $\widehat{Y}_{i}$ is what the estimated value of the $Y$ variable would be for the $i$ th observation based on the mean relationship between $Y$ and $X$. The residual for the $i$ th observation, $e_{i}$, is how much the observed value of $Y_{i}$ differs from the $\widehat{Y}_{i}$ estimated using the regression line: $e_{i}=Y_{i}-\widehat{Y}_{i}$. Note the subtle difference between the error term and the residual: The error term refers to the true underlying population relationship, whereas the residual refers to the fitted linear relation based on the sample.

Fitting the line requires minimizing the sum of the squared residuals, the sum of squares error (SSE), also known as the residual sum of squares:

Sum of squares error $=\sum_{i=1}^{n}\left(Y_{i}-\widehat{Y}_{i}\right)^{2}$

$$
\begin{aligned}
& =\sum_{i=1}^{n}\left[Y_{i}-\left(\hat{b}_{0}+\hat{b}_{1} X_{i}\right)\right]^{2} \\
& =\sum_{i=1}^{n} e_{i}^{2}
\end{aligned}
$$

Using least squares regression to estimate the values of the population parameters of $b_{0}$ and $b_{1}$, we can fit a line through the observations of $X$ and $Y$ that explains the value that $Y$ takes for any particular value of $X$.

As seen in Exhibit 5, the residuals are represented by the vertical distances from the fitted line (see the third and fifth observations, Companies C and E, respectively) and are, therefore, in the units of measurement represented by the dependent variable. The residual is in the same unit of measurement as the dependent variable: If the dependent variable is in euros, the error term is in euros, and if the dependent variable is in growth rates, the error term is in growth rates.

## Exhibit 5: Residuals of the Linear Regression

![](https://cdn.mathpix.com/cropped/2025_06_02_26925517943c41f8f8b8g-06.jpg?height=695&width=977&top_left_y=327&top_left_x=731)

How do we calculate the intercept $\left(\widehat{b}_{0}\right)$ and the slope $\left(\widehat{b}_{1}\right)$ for a given sample of $(Y$, $X)$ pairs of observations? The slope is the ratio of the covariance between $Y$ and $X$ to the variance of $X$, where $\bar{Y}$ is the mean of the $Y$ variable and $\bar{X}$ is the mean of $X$ variable:

$$
\hat{b}_{1}=\frac{\text { Covariance of } Y \text { and } X}{\text { Variance of } X}=\frac{\frac{\sum_{i=1}^{n}\left(Y_{i}-\bar{Y}\right)\left(X_{i}-\bar{X}\right)}{n-1}}{\frac{\sum_{i=1}^{n}\left(X_{i}-\bar{X}\right)^{2}}{n-1}} .
$$

Simplifying,

$$
\hat{b}_{1}=\frac{\sum_{i=1}^{n}\left(Y_{i}-\bar{Y}\right)\left(X_{i}-\bar{X}\right)}{\sum_{i=1}^{n}\left(X_{i}-\bar{X}\right)^{2}} .
$$

Once we estimate the slope, we can then estimate the intercept using the mean of $Y$ and the mean of $X$ :

$$
\hat{b}_{0}=\bar{Y}-\hat{b}_{1} \bar{X} .
$$

Incremental values to calculate the slope and the intercept are in Exhibit 6.

Exhibit 6: Estimating Slope and Intercept for the ROA Model

| Company | ROA (Yi) | CAPEX (Xi) | $\left(Y_{i}-\bar{Y}\right)^{2}$ | $\left(X_{i}-\bar{X}\right)^{2}$ | $\left(Y_{i}-\bar{Y}\right)\left(X_{i}-\bar{X}\right)$ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| A | 6.0 | 0.7 | 42.25 | 29.16 | 35.10 |
| B | 4.0 | 0.4 | 72.25 | 32.49 | 48.45 |
| C | 15.0 | 5.0 | 6.25 | 1.21 | -2.75 |
| D | 20.0 | 10.0 | 56.25 | 15.21 | 29.25 |
| E | 10.0 | 8.0 | 6.25 | 3.61 | -4.75 |
| F | 20.0 | 12.5 | 56.25 | 40.96 | 48.00 |


| Company | ROA (Yi) | CAPEX (Xi) | $\left(Y_{i}-\bar{Y}\right)^{\mathbf{2}}$ | $\left(X_{i}-\bar{X}\right)^{\mathbf{2}}$ | $\left(Y_{i}-\bar{Y}\right)\left(X_{i}-\bar{X}\right)$ |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Sum | 75.0 | 36.6 | 239.50 | 122.64 | 153.30 |
| Arithmetic | 12.5 | 6.1 |  |  |  |
| mean |  |  |  |  |  |

Slope coefficient: $\hat{b}_{1}=\frac{153.30}{122.64}=1.25$.
Intercept: $\widehat{b}_{0}=12.5-(1.25 \times 6.10)=4.875$.
ROW regression model: $\widehat{Y}_{i}=4.875+1.25 X_{i}+\varepsilon_{i}$.
Notice the similarity of the formula for the slope coefficient and that of the pairwise correlation. The sample correlation, $r$, is the ratio of the covariance to the product of the standard deviations:

$$
r=\frac{\text { Covariance of } Y \text { and } X}{(\text { Standard deviation of } Y)(\text { Standard deviation of } X)}
$$

The subtle difference between the slope and the correlation formulas is in the denominator: For the slope, this is the variance of the independent variable, but for the correlation, the denominator is the product of the standard deviations. For our ROA and CAPEX analysis,

Covariance of $Y$ and $X: \operatorname{cov}_{X Y}=\frac{\sum_{i=1}^{n}\left(Y_{i}-\bar{Y}\right)\left(X_{i}-\bar{X}\right)}{n-1}=\frac{153.30}{5}=30.6600$.
Standard deviation of $Y$ and $X$ :

$$
\begin{aligned}
& S_{Y}=\sqrt{\frac{\sum_{i=1}^{n}\left(Y_{i}-\bar{Y}\right)^{2}}{n-1}}=\sqrt{\frac{239.50}{5}}=6.9210 \\
& S_{X}=\sqrt{\frac{\sum_{i=1}^{n}\left(X_{i}-\bar{X}\right)^{2}}{n-1}}=\sqrt{\frac{122.64}{5}}=4.9526 \\
& r=\frac{30.66}{(6.9210)(4.9526)}=0.8945
\end{aligned}
$$

Because the denominators of both the slope and the correlation are positive, the sign of the slope and the correlation are driven by the numerator: If the covariance is positive, both the slope and the correlation are positive, and if the covariance is negative, both the slope and the correlation are negative.

## EXAMPLE 1

## How Do Analysts Perform Simple Linear Regression?

Typically, an analyst will use the data analysis functions on a spreadsheet, such as Microsoft Excel, or a statistical package in the R or Python programming languages to perform linear regression analysis. The following are some of the more common choices in practice.

## Simple Linear Regression: Intercept and Slope

- Excel: Use the INTERCEPT, SLOPE functions.
- $R$ : Use the 1 m function.
- Python: Use the sm.OLS function in the statsmodels package.


## Correlations

- Excel: Use the CORREL function.
- $\quad R$ : Use the cor function in the stats library.
- Python: Use the corrcoef function in the numpy library.

Note that in R and Python, there are many choices for regression and correlation analysis.

## Interpreting the Regression Coefficients

What is the meaning of the regression coefficients? The intercept is the value of the dependent variable if the value of the independent variable is zero. Importantly, this does not make sense in some contexts, especially if it is unrealistic that the independent variable would be zero. For example, if we have a model in which money supply explains GDP growth, the intercept has no meaning because, practically speaking, zero money supply is not possible. If the independent variable were money supply growth, however, the intercept is meaningful. The slope is the change in the dependent variable for a one-unit change in the independent variable. If the slope is positive, then the change in the independent variable and that of the dependent variable will be in the same direction; if the slope is negative, the change in the independent variable and that of the dependent variable will be in opposite directions.

## EXAMPLE 2

## Interpreting Positive and Negative Slopes

Suppose the dependent variable (Y) is in millions of euros and the independent variable ( $X$ ) is in millions of US dollars.

If the slope is positive 1.2, then
$\uparrow$ USD1 million $\rightarrow \uparrow$ EUR1.2 million
$\downarrow$ USD1 million $\rightarrow \downarrow$ EUR1.2 million
If the slope is negative 1.2, then
$\uparrow$ USD1 million $\rightarrow \downarrow$ EUR1.2 million
$\downarrow$ USD1 million $\rightarrow \uparrow$ EUR1.2 million
Using the ROA regression model from Exhibit 6, we would interpret the estimated coefficients as follows:

- The return on assets for a company is $4.875 \%$ if the company makes no capital expenditures.
- If CAPEX increases by one unit-say, from $4 \%$ to 5\%-ROA increases by $1.25 \%$.

Using the estimated regression coefficients, we can determine the values of the dependent variable if they follow the average relationship between the dependent and independent variables. A result of the mathematics of the least squares fitting of the regression line is that the expected value of the residual term is zero: $\mathrm{E}(\varepsilon)=0$.

We show the calculation of the predicted dependent variable and residual term for each observation in the ROA example in Exhibit 7. Note that the sum and average of $Y_{i}$ and $\widehat{Y}_{1}$ are the same, and the sum of the residuals is zero.

## Exhibit 7: Calculation of the Dependent Variable and Residuals for the ROA and CAPEX Model

| Company | (1) | (2) | (3) | (4) |
| :--- | :--- | :--- | :--- | :--- |
|  | ROA ( $\mathrm{Y}_{\mathrm{i}}$ ) | CAPEX( $\mathrm{X}_{\mathrm{i}}$ ) | Predicted ROA $\left(\widehat{Y}_{i}\right)$ | (1) - (3) (2) Residual ( $e_{i}$ ) |
| A | 6.0 | 0.7 | 5.750 | 0.250 |
| B | 4.0 | 0.4 | 5.375 | -1.375 |
| C | 15.0 | 5.0 | 11.125 | 3.875 |
| D | 20.0 | 10.0 | 17.375 | 2.625 |
| E | 10.0 | 8.0 | 14.875 | -4.875 |
| F | 20.0 | 12.5 | 20.500 | -0.500 |
| Sum | 75.0 | 36.6 | 75.000 | 0.000 |
| Average | 12.5 | 6.1 | 12.5 | 0.000 |

For Company $C(i=3)$,
$\widehat{Y}_{i}=\widehat{b}_{0}+\widehat{b}_{1} X_{i}+\varepsilon_{i}=4.875+1.25 X_{i}+\varepsilon_{i}$
$\widehat{Y}_{i}=4.875+(1.25 \times 5.0)=4.875+6.25=11.125$
$Y_{i}-\widehat{Y}_{i}=e_{i}=15.0-11.125=3.875$, the vertical distance in Exhibit 5 .
Whereas the sum of the residuals must equal zero by design, the focus of fitting the regression line in a simple linear regression is minimizing the sum of the squared residual terms.

## Cross-Sectional versus Time-Series Regressions

Regression analysis uses two principal types of data: cross sectional and time series. A cross-sectional regression involves many observations of $X$ and $Y$ for the same time period. These observations could come from different companies, asset classes, investment funds, countries, or other entities, depending on the regression model. For example, a cross-sectional model might use data from many companies to test whether predicted EPS growth explains differences in price-to-earnings ratios during a specific time period. Note that if we use cross-sectional observations in a regression, we usually denote the observations as $i=1,2, \ldots, n$.

Time-series data use many observations from different time periods for the same company, asset class, investment fund, country, or other entity, depending on the regression model. For example, a time-series model might use monthly data from many years to test whether a country's inflation rate determines its short-term interest rates. If we use time-series data in a regression, we usually denote the observations as $t=1,2, \ldots, T$. Note that in the sections that follow, we primarily use the notation $i=1,2, \ldots, n$, even for time series.

## QUESTION SET

An analyst is exploring the relationship between a company's net profit margin and research and development expenditures. He collects data for an industry and calculates the ratio of research and development expenditures to revenues (RDR) and the net profit margin (NPM) for eight companies.

Specifically, he wants to explain the net profit margin variation by using the variation observed in the companies' research and development spending. He reports the data in Exhibit 8.

## Exhibit 8: Observations on NPM and RDR for Eight Companies

| Company | NPM (\%) | RDR (\%) |
| :--- | :--- | :--- |
| 1 | 4 | 8 |
| 2 | 5 | 10 |
| 3 | 10 | 6 |
| 4 | 9 | 5 |
| 5 | 5 | 7 |
| 6 | 6 | 9 |
| 7 | 12 | 5 |
| 8 | 3 | 10 |

1. What is the slope coefficient for this simple linear regression model?

## Solution:

The slope coefficient for the regression model is -1.3 , and the details for the inputs to this calculation are in Exhibit 9.

Exhibit 9: Details of Calculation of Slope of NPM Regressed on RDR

| Company | NPM (\%) ( $\mathrm{Y}_{\mathrm{i}}$ ) | RDR (\%) ( $\mathrm{X}_{\mathrm{i}}$ ) | $Y_{i}-\bar{Y}$ | $X_{i}-\bar{X}$ | $\left(Y_{i}-\bar{Y}\right)^{2}$ | $\left(X_{i}-\bar{X}\right)^{2}$ | $\left(Y_{i}-\bar{Y}\right)\left(X_{i}-\bar{X}\right)$ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 4 | 8 | -2.8 | 0.5 | 7.5625 | 0.25 | -1.375 |
| 2 | 5 | 10 | -1.8 | 2.5 | 3.0625 | 6.25 | -4.375 |
| 3 | 10 | 6 | 3.3 | -1.5 | 10.5625 | 2.25 | -4.875 |
| 4 | 9 | 5 | 2.3 | -2.5 | 5.0625 | 6.25 | -5.625 |
| 5 | 5 | 7 | -1.8 | -0.5 | 3.0625 | 0.25 | 0.875 |
| 6 | 6 | 9 | -0.8 | 1.5 | 0.5625 | 2.25 | -1.125 |
| 7 | 12 | 5 | 5.3 | -2.5 | 27.5625 | 6.25 | -13.125 |
| 8 | 3 | 10 | -3.8 | 2.5 | 14.0625 | 6.25 | -9.375 |
| Sum | 54 | 60 | 0.0 | 0.0 | 71.5000 | 30.00 | -39.000 |
| Average | 6.75 | 7.5 |  |  |  |  |  |

Slope coefficient: $\hat{b}_{1}=\frac{-39}{30}=-1.3$.
2. What is the intercept for this regression model?

## Solution:

The intercept of the regression model is 16.5:
Intercept: $\hat{b}_{0}=6.75-(-1.3 \times 7.5)=6.75+9.75=16.5$
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

