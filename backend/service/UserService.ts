import { injectable, inject } from "inversify";
import { IUserService } from "../service/IuserService";
import { Context } from "../model/context"

@injectable()
export class UserService implements IUserService {
    //@inject("Context") private context: Context

    private _context: Context;
    public constructor(
        @inject("Context") context: Context,
    ) {
        this._context = context;
    }

    public async addUser(): Promise<void> {
        try {
            let u = new this._context.user({ name: 'www1' });
            await this._context.save(u);

            let ad = new this._context.address({ name: 'add1' });
            await this._context.save(ad);
        }
        catch (e) {
            throw new Error(e);
        } finally {
            await this._context.dispose();
        }
    }
}