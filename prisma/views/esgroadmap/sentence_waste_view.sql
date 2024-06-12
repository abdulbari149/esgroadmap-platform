SELECT
  `esgroadmap`.`sentenceallview`.`id` AS `id`,
  `esgroadmap`.`sentenceallview`.`Company` AS `Company`,
  `esgroadmap`.`sentenceallview`.`emails` AS `emails`,
  `esgroadmap`.`sentenceallview`.`full_text` AS `full_text`,
  `esgroadmap`.`sentenceallview`.`Source link` AS `Source link`,
  `esgroadmap`.`sentenceallview`.`DocURL` AS `DocURL`,
  `esgroadmap`.`sentenceallview`.`pr_site` AS `pr_site`,
  `esgroadmap`.`sentenceallview`.`release_date` AS `release_date`,
  `esgroadmap`.`sentenceallview`.`source` AS `source`,
  `esgroadmap`.`sentenceallview`.`ticker` AS `ticker`,
  `esgroadmap`.`sentenceallview`.`title` AS `title`,
  `esgroadmap`.`sentenceallview`.`ArticleTargetYear` AS `ArticleTargetYear`,
  `esgroadmap`.`sentenceallview`.`PressReleaseFullCleanstep1` AS `PressReleaseFullCleanstep1`,
  `esgroadmap`.`sentenceallview`.`PressReleaseFullClean` AS `PressReleaseFullClean`,
  `esgroadmap`.`sentenceallview`.`Source Date` AS `Source Date`,
  `esgroadmap`.`sentenceallview`.`Annual Report Date` AS `Annual Report Date`,
  `esgroadmap`.`sentenceallview`.`PressReleaseYear` AS `PressReleaseYear`,
  `esgroadmap`.`sentenceallview`.`PressReleaseMonth` AS `PressReleaseMonth`,
  `esgroadmap`.`sentenceallview`.`Target sentence` AS `Target sentence`,
  `esgroadmap`.`sentenceallview`.`SentenceTargetYear` AS `SentenceTargetYear`,
  `esgroadmap`.`sentenceallview`.`Targetyear(s)` AS `Targetyear(s)`,
  `esgroadmap`.`sentenceallview`.`sentence-carbon` AS `sentence-carbon`,
  `esgroadmap`.`sentenceallview`.`sentence-gender` AS `sentence-gender`,
  `esgroadmap`.`sentenceallview`.`sentence-renewables` AS `sentence-renewables`,
  `esgroadmap`.`sentenceallview`.`sentence-suppliers` AS `sentence-suppliers`,
  `esgroadmap`.`sentenceallview`.`sentence-water` AS `sentence-water`,
  `esgroadmap`.`sentenceallview`.`sentence-waste` AS `sentence-waste`,
  `esgroadmap`.`sentenceallview`.`sentence-other` AS `sentence-other`,
  `esgroadmap`.`sentenceallview`.`Member of the S&P500` AS `Member of the S&P500`,
  `esgroadmap`.`sentenceallview`.`Member of the Russell 1000 Index` AS `Member of the Russell 1000 Index`,
  `esgroadmap`.`sentenceallview`.`Ticker(s)` AS `Ticker(s)`,
  `esgroadmap`.`sentenceallview`.`PR Agency` AS `PR Agency`,
  `esgroadmap`.`sentenceallview`.`Company global/main press - news release site URL` AS `Company global/main press - news release site URL`,
  `esgroadmap`.`sentenceallview`.`Company annual reports page URL` AS `Company annual reports page URL`,
  `esgroadmap`.`sentenceallview`.`Company sustainability / ESG reports page URL` AS `Company sustainability / ESG reports page URL`,
  `esgroadmap`.`sentenceallview`.`Country` AS `Country`,
  `esgroadmap`.`sentenceallview`.`sector code #1 (NAICS)` AS `sector code #1 (NAICS)`,
  `esgroadmap`.`sentenceallview`.`sector name #1 (NAICS)` AS `sector name #1 (NAICS)`,
  `esgroadmap`.`sentenceallview`.`sector code #2 (NAICS)` AS `sector code #2 (NAICS)`,
  `esgroadmap`.`sentenceallview`.`sector name #2 (NAICS)` AS `sector name #2 (NAICS)`,
  `esgroadmap`.`sentenceallview`.`sector code #3 (NAICS)` AS `sector code #3 (NAICS)`,
  `esgroadmap`.`sentenceallview`.`sector name #3 (NAICS)` AS `sector name #3 (NAICS)`,
  `esgroadmap`.`sentenceallview`.`sector code #4 (NAICS)` AS `sector code #4 (NAICS)`,
  `esgroadmap`.`sentenceallview`.`sector name #4 (NAICS)` AS `sector name #4 (NAICS)`,
  `esgroadmap`.`sentenceallview`.`sector code #5 (NAICS)` AS `sector code #5 (NAICS)`,
  `esgroadmap`.`sentenceallview`.`sector name #5 (NAICS)` AS `sector name #5 (NAICS)`,
  `esgroadmap`.`sentenceallview`.`upload-date` AS `upload-date`
FROM
  `esgroadmap`.`sentenceallview`
WHERE
  (
    `esgroadmap`.`sentenceallview`.`sentence-waste` = 1
  )