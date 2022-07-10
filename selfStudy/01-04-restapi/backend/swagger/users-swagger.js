/**
 * @swagger
 * /Users:
 *   get:
 *     summary: 사용자 가져오기
 *     tags: [Users]
 *     parameters:
 *          - in: query
 *            name: email
 *            type: string
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *              schema:
 *                  type: array
 *                  items:
 *                      properties:
 *                          email:
 *                              type: string
 *                              example: aaa@naver.com
 *                          name:
 *                              type: string
 *                              example: 땃쥐
 *                          phone:
 *                              type: string
 *                              example: 010-1234-5678
 */