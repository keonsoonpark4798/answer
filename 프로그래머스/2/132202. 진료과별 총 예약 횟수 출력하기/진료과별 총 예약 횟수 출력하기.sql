SELECT MCDP_CD AS "진료과 코드", COUNT(*) AS "5월예약건수"
FROM APPOINTMENT
WHERE SUBSTRING(APNT_YMD,6,2) = '05'
GROUP BY MCDP_CD
ORDER BY COUNT(*),MCDP_CD ASC;