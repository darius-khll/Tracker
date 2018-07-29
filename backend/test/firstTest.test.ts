import * as calcService from "../service/calcService"

describe('Test the root path', () => {
    test('It should return sum of calcService', () => {
        // request(app1).get('/').then((response : express.Response) => {
        //     expect(response.statusCode).toBe(200);
        //     done();
        // });
        let sum = new calcService.default().sum(1, 2);
        expect(sum).toBe(3);

    });
});