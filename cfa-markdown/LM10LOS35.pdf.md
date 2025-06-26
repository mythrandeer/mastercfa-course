| Exhibit 37: ANOVA Output |  |  |
| :--- | :--- | :--- |
| Source | Mean Square | $p$-Value |
| Regression | 88.0 | 0.00904 |
| Residual | 2.4 |  |
| Total |  |  |
| 11. Calculate the sample variance of the dependent variable using information in the table. <br> Solution: <br> The sample variance of the dependent variable is the sum of squares total divided by its degrees of freedom ( $n-1=5-1=4$, as given). Thus, the sample variance of the dependent variable is $95.2 \div 4=23.8$. |  |  |
| 12. Calculate the coefficient of determination for this estimated model. <br> Solution: <br> The coefficient of determination $=88.0 \div 95.2=0.92437$. |  |  |
| 13. What hypothesis does the $F$-statistic test? <br> Solution: <br> The $F$-statistic tests whether all the slope coefficients in a linear regression are equal to zero. |  |  |
| 14. Is the $F$-test significant at the 0.05 significance level? <br> Solution: <br> The calculated value of the $F$-statistic is 36.667 , as shown in Exhibit 32. The corresponding $p$-value is less than 0.05 , so you reject the null hypothesis of a slope equal to zero. |  |  |
| 15. Calculate the standard error of the estimate. <br> Solution: <br> The standard error of the estimate is the square root of the mean square error: $s_{e}=\sqrt{2.4}=1.54919$. |  |  |

## FUNCTIONAL FORMS FOR SIMPLE LINEAR REGRESSION

describe different functional forms of simple linear regressions

Not every set of independent and dependent variables has a linear relation. In fact, we often see non-linear relationships in economic and financial data. Consider the revenues of a company over time illustrated in Exhibit 38, with revenues as the dependent
$(Y)$ variable and time as the independent $(X)$ variable. Revenues grow at a rate of 15 percent per year for several years, but then the growth rate eventually declines to just 5 percent per year. Estimating this relationship as a simple linear model would understate the dependent variable, revenues, and, for some ranges of the independent variable, time, and would overstate it for other ranges of the independent variable.

## Exhibit 38: Company Revenues over Time

![](https://cdn.mathpix.com/cropped/2025_06_02_b711f69be4822a5808a3g-2.jpg?height=632&width=957&top_left_y=622&top_left_x=424)

We can still use the simple linear regression model, but we need to modify either the dependent or the independent variables to make it work well. This is the case with many different financial or economic data that you might use as dependent and independent variables in your regression analysis.

Several different functional forms can be used to potentially transform the data to enable their use in linear regression. These transformations include using the log (i.e., natural logarithm) of the dependent variable, the log of the independent variable, the reciprocal of the independent variable, the square of the independent variable, or the differencing of the independent variable. We illustrate and discuss three often-used functional forms, each of which involves log transformation:

1. the log-lin model, in which the dependent variable is logarithmic but the independent variable is linear;
2. the lin-log model, in which the dependent variable is linear but the independent variable is logarithmic; and
3. the log-log model, in which both the dependent and independent variables are in logarithmic form.

## The Log-Lin Model

In the log-lin model, the dependent variable is in logarithmic form and the independent variable is not, as follows:

$$
\ln Y_{i}=b_{0}+b_{1} X_{i} .
$$

The slope coefficient in this model is the relative change in the dependent variable for an absolute change in the independent variable. We can transform the $Y$ variable (revenues) in Exhibit 38 into its natural log (ln) and then fit the regression line, as shown in Exhibit 39. From this chart, we see that the log-lin model is a better-fitting model than the simple linear regression model.

Exhibit 39: Log-Lin Model Applied to Company Revenues over Time
![](https://cdn.mathpix.com/cropped/2025_06_02_b711f69be4822a5808a3g-3.jpg?height=647&width=920&top_left_y=617&top_left_x=760)

It is important to note that in working with a log-lin model, you must take care when making a forecast. For example, suppose the estimated regression model is $\ln Y=$ $-7+2 X$. If $X$ is 2.5 percent, then the forecasted value of $\ln Y$ is -2 . In this case, the predicted value of $Y$ is the antilog of -2 , or $e^{-2}=0.135335$. Another caution is that you cannot directly compare a log-lin model with a lin-lin model (i.e., the regression of $Y$ on $X$ without any transformation) because the dependent variables are not in the same form-we would have to transform the $R^{2}$ and $F$-statistic to enable a comparison. Looking at the residuals, however, is helpful:

## The Lin-Log Model

The lin-log model is similar to the log-lin model, but only the independent variable is in logarithmic form:

$$
Y_{i}=b_{0}+b_{1} \ln X_{i}
$$

The slope coefficient in this regression model provides the absolute change in the dependent variable for a relative change in the independent variable.

Suppose an analyst is examining the cross-sectional relationship between operating profit margin, the dependent variable ( $Y$ ), and unit sales, the independent variable ( $X$ ), and gathers data on a sample of 30 companies. The scatter plot and regression line for these observations are shown in Exhibit 40. Although the slope is different from zero at the 5 percent level (the calculated $t$-statistic on the slope is 5.8616 , compared with critical $t$-values of $\pm 2.048$ ), given the $R^{2}$ of 55.10 percent, the issue is whether we can get a better fit by using a different functional form.

Exhibit 40: Relationship between Operating Profit Margin and Unit Sales
![](https://cdn.mathpix.com/cropped/2025_06_02_b711f69be4822a5808a3g-4.jpg?height=660&width=1047&top_left_y=326&top_left_x=382)

If instead we use the natural log of the unit sales as the independent variable in our model, we get a very different picture, as shown in Exhibit 41. The $R^{2}$ for the model of operating profit margin regressed on the natural log of unit sales jumps to 97.17 percent. Because the dependent variable is the same in both the original and transformed models, we can compare the standard error of the estimate: 2.2528 with the original independent variable and a much lower 0.5629 with the transformed independent variable. Clearly the log-transformed explanatory variable has resulted in a better-fitting model.

## Exhibit 41: Relationship Between Operating Profit Margin and Natural Logarithm of Unit Sales

![](https://cdn.mathpix.com/cropped/2025_06_02_b711f69be4822a5808a3g-4.jpg?height=641&width=1055&top_left_y=1661&top_left_x=378)

## The Log-Log Model

The log-log model, in which both the dependent variable and the independent variable are linear in their logarithmic forms, is also referred to as the double-log model:

$$
\ln Y_{i}=b_{0}+b_{1} \ln X_{i} .
$$

This model is useful in calculating elasticities because the slope coefficient is the relative change in the dependent variable for a relative change in the independent variable. Consider a cross-sectional model of company revenues (the $Y$ variable) regressed on advertising spending as a percentage of selling, general, and administrative expenses, ADVERT (the $X$ variable). As shown in Exhibit 42, a simple linear regression model results in a shallow regression line, with a coefficient of determination of just 20.89 percent.

Exhibit 42: Fitting a Linear Relation Between Revenues and Advertising Spending
![](https://cdn.mathpix.com/cropped/2025_06_02_b711f69be4822a5808a3g-5.jpg?height=708&width=1170&top_left_y=985&top_left_x=632)

If instead we use the natural logarithms of both the revenues and ADVERT, we get a much different picture of this relationship. As shown in Exhibit 43, the estimated regression line has a significant positive slope; the log-log model's $R^{2}$ increases by more than four times, from 20.89 percent to 84.91 percent; and the $F$-statistic jumps from 7.39 to 157.52 . So, using the log-log transformation dramatically improves the regression model fit relative to our data.

## Exhibit 43: Fitting a Log-Log Model of Revenues and Advertising Spending

![](https://cdn.mathpix.com/cropped/2025_06_02_b711f69be4822a5808a3g-6.jpg?height=754&width=1014&top_left_y=325&top_left_x=401)

## Selecting the Correct Functional Form

The key to fitting the appropriate functional form of a simple linear regression is examining the goodness-of-fit measures-the coefficient of determination $\left(R^{2}\right)$, the $F$-statistic, and the standard error of the estimate $\left(s_{e}\right)$-as well as examining whether there are patterns in the residuals. In addition to fit statistics, most statistical packages provide plots of residuals as part of the regression output, which enables you to visually inspect the residuals. To reiterate an important point, what you want to see in these plots is random residuals.

As an example, consider the relationship between the monthly returns on DEF stock and the monthly returns of the EAA Equity Index, as depicted in Panel A of Exhibit 44, with the regression line indicated. Using the equation for this regression line, we calculate the residuals and plot them against the EAA Equity Index, as shown in Panel B of Exhibit 44. The residuals appear to be random, bearing no relation to the independent variable. The distribution of the residuals, shown in Panel C of Exhibit 44, shows that the residuals are approximately normal. Using statistical software, we can investigate further by examining the distribution of the residuals, including using a normal probability plot or statistics to test for normality of the residuals.

## Exhibit 44: Monthly Returns on DEF Stock Regressed on Returns on the EAA Index

A. Scatterplot of Returns on DEF Stock and Return on the EAA Index

Return on DEF Stock (\%)
![](https://cdn.mathpix.com/cropped/2025_06_02_b711f69be4822a5808a3g-7.jpg?height=470&width=749&top_left_y=459&top_left_x=840)
B. Scatterplot of Residuals and the Returns on the EAA Index
![](https://cdn.mathpix.com/cropped/2025_06_02_b711f69be4822a5808a3g-7.jpg?height=519&width=755&top_left_y=1017&top_left_x=837)
C. Histogram of Residuals
![](https://cdn.mathpix.com/cropped/2025_06_02_b711f69be4822a5808a3g-7.jpg?height=586&width=858&top_left_y=1626&top_left_x=788)

## QUESTION SET

An analyst is investigating the relationship between the annual growth in consumer spending (CONS) in a country and the annual growth in the country's GDP (GGDP). The analyst estimates the two models in Exhibit 45.

## Exhibit 45: Model Estimates

|  | Model 1 | Model 2 |
| :--- | :--- | :--- |
|  | $\mathrm{GGDP}_{\mathrm{i}}=b_{0}+b_{1} \mathrm{CONS}_{\mathrm{i}}+\varepsilon_{\mathrm{i}}$ | $\mathrm{GGDP}_{\mathrm{i}}=b_{0}+b_{1} \ln \left(\right.$ CONS $\left._{\mathrm{i}}\right)+\varepsilon_{\mathrm{i}}$ |
| Intercept | 1.040 | 1.006 |
| Slope | 0.669 | 1.994 |
| $R^{2}$ | 0.788 | 0.867 |
| Standard error of the estimate | 0.404 | 0.320 |
| $F$-statistic | 141.558 | 247.040 |

1. Identify the functional form used in these models.

## Solution:

Model 1 is a simple linear regression model with no variable transformation, whereas Model 2 is a lin-log model with the natural log of the variable CONS as the independent variable.
2. Explain which model has better goodness of fit with the sample data.

## Solution:

The lin-log model, Model 2, fits the data better. Since the dependent variable is the same for the two models, we can compare the fit of the models using either the relative measures ( $R^{2}$ or $F$-statistic) or the absolute measure of fit, the standard error of the estimate. The standard error of the estimate is lower for Model 2, whereas the $R^{2}$ and $F$-statistic are higher for Model 2 compared with Model 1.

