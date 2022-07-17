/**
 * @swagger
 * /tokens/phone:
 *   post:
 *     summary: 토큰 인증 요청
 *     tags: [token-controller]
 *     requestBody:
 *       required: true
 *       description: 핸드폰 번호 입력
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               phone:
 *                  type: string
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *              schema:
 *                  type: string
 *                  example: 핸드폰으로 인증 문자가 전송되었습니다!
 *   patch:
 *     summary: 인증 완료
 *     tags: [token-controller]
 *     requestBody:
 *       required: true
 *       description: 핸드폰 번호 입력
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               phone:
 *                  type: string
 *               token:
 *                  type: string
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *              schema:
 *                type: boolean
 *                example: true
 */