/**
 * @swagger
 * /users:
 *   get:
 *     summary: 회원 목록 조회
 *     tags: [user-controller]
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *              schema:
 *                  type: array
 *                  items:
 *                      properties:
 *                          id:
 *                              type: string
 *                              example: 62d21ff074642bf615303a50
 *                          name:
 *                              type: string
 *                              example: 아라111
 *                          email:
 *                              type: string
 *                              example: ala@gmail.com
 *                          personal:
 *                              type: string
 *                              example: 220101-*******
 *                          prefer:
 *                              type: string
 *                              example: https://naver.com
 *                          phone:
 *                              type: string
 *                              example: 01012345678
 *                          og:
 *                              type: object
 *                              properties:
 *                                  title:
 *                                      type: string
 *                                      example: 네이버
 *                                  description:
 *                                      type: string
 *                                      example: "네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요"
 *                                  image:
 *                                      type: string
 *                                      example: "https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png"
 * /user:
 *   post:
 *     summary: 회원 가입
 *     tags: [user-controller]
 *     requestBody:
 *       required: true
 *       description: 회원 정보 입력
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                  type: string
 *               email:
 *                  type: string
 *               personal:
 *                  type: string
 *               prefer:
 *                  type: string
 *               pwd:
 *                  type: string
 *               phone:
 *                  type: string
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *              schema:
 *                type: string
 *                example: 61e62e84bf8893ecb66f35f9
 */