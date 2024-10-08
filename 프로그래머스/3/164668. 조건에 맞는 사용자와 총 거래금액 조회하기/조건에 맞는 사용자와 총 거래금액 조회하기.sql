-- 코드를 입력하세요
SELECT t1.USER_ID, t1.NICKNAME, SUM(t2.PRICE) AS TOTAL_SALES
FROM USED_GOODS_USER t1 JOIN USED_GOODS_BOARD t2 ON (t1.USER_ID = t2.WRITER_ID)
WHERE t2.STATUS = "DONE"
GROUP BY 1
HAVING TOTAL_SALES >= 700000
ORDER BY TOTAL_SALES;