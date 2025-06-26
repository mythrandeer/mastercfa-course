Additionally, we could use software to calculate the $p$-value of the calculated test statistic, which is 5.896 percent, and then compare it with the level of significance:

Excel
[(1-F.DIST(22.367/15.796,119,119,TRUE))*2 or
F.DIST (15.796/22.367,119,119,TRUE) *2]

R
[(1-pf(22.367/15.796,119,119))*2 or
pf (15.796/22.367,119,119) *2]
Python
from scipy.stats import $f$ and $f . c d f$
$[(15.796 / 22.367,119,119) * 2$ or
(1-f.cdf(22.367/15.796,119,119))*2]

## PARAMETRIC VERSUS NONPARAMETRIC TESTS

compare and contrast parametric and nonparametric tests, and describe situations where each is the more appropriate type of test

The hypothesis testing procedures we have discussed up to this point have two characteristics in common. First, they are concerned with parameters, and second, their validity depends on a definite set of assumptions. Mean and variance, for example, are two parameters, or defining quantities, of a normal distribution. The tests also make specific assumptions-in particular, assumptions about the distribution of the population producing the sample. Any test or procedure with either of these two characteristics is a parametric test or procedure.

In some cases, however, we are concerned about quantities other than parameters of distributions. In other cases, we may believe that the assumptions of parametric tests do not hold. In cases where we are examining quantities other than population parameters or where assumptions of the parameters are not satisfied, a nonparametric test or procedure can be useful.

A nonparametric test is a test that is not concerned with a parameter or a test that makes minimal assumptions about the population from which the sample comes. Exhibit 13 presents examples of nonparametric alternatives to the parametric, $t$-distributed tests concerning means.

Exhibit 13: Nonparametric Alternatives to Parametric Tests Concerning
Means

|  | Parametric | Nonparametric |
| :--- | :---: | :--- |
| Tests concerning a single mean | $t$-distributed test | Wilcoxon signed-rank test |
|  | $z$-distributed test |  |

Tests concerning differences between means

Tests concerning mean differences (paired comparisons tests)
$t$-distributed test $\quad$ Mann-Whitney $U$ test (Wilcoxon rank sum test)
$t$-distributed test Wilcoxon signed-rank test Sign test

## Uses of Nonparametric Tests

Nonparametric procedures are primarily used in four situations: (1) when the data do not meet distributional assumptions, (2) when there are outliers, (3) when the data are given in ranks or use an ordinal scale, or (4) when the relevant hypotheses do not concern a parameter.

The first situation occurs when the data available for analysis suggest that the distributional assumptions of the parametric test are not satisfied. For example, we may want to test a hypothesis concerning the mean of a population but believe that neither $t$ - nor $z$-distributed tests are appropriate because the sample is small and may come from a markedly non-normally distributed population. In that case, we may use a nonparametric test. The nonparametric test will frequently involve the conversion of observations (or a function of observations) into ranks according to magnitude, and sometimes it will involve working with only "greater than" or "less than" relationships (using the + and - signs to denote those relationships). Characteristically, one must refer to specialized statistical tables to determine the rejection points of the test statistic, at least for small samples. Such tests, then, typically interpret the null hypothesis as a hypothesis about ranks or signs.

Second, whereas the underlying distribution of the population may be normal, there may be extreme values or outliers that influence the parametric statistics but not the nonparametric statistics. For example, we may want to use a nonparametric test of the median, in the case of outliers, instead of a test of the mean.

Third, we may have a sample in which observations are ranked. In those cases, we also use nonparametric tests because parametric tests generally require a stronger measurement scale than ranks. For example, if our data were the rankings of investment managers, we would use nonparametric procedures to test the hypotheses concerning those rankings.

A fourth situation in which we use nonparametric procedures occurs when our question does not concern a parameter. For example, if the question concerns whether a sample is random or not, we use the appropriate nonparametric test (a "runs test"). The nonparametric runs test is used to test whether stock price changes can be used to forecast future stock price changes-in other words, a test of the random walk theory. Another type of question that nonparametric methods can address is whether a sample came from a population following a particular probability distribution.

## Nonparametric Inference: Summary

Nonparametric statistical procedures extend the reach of inference because they make few assumptions, can be used on ranked data, and may address questions unrelated to parameters. Quite frequently, nonparametric tests are reported alongside parametric tests; the user can then assess how sensitive the statistical conclusion is to the assumptions underlying the parametric test. However, if the assumptions of the parametric test are met, the parametric test (where available) is generally preferred over the nonparametric test because the parametric test may have more power-that is, a greater ability to reject a false null hypothesis.

