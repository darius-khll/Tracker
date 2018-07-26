import { injectable, inject } from "inversify";
import { IUserService } from "../service/IuserService";
import { Context } from "../model/context"

@injectable()
export class UserService implements IUserService {
    @inject("Context") private context: Context

    public async addUser(): Promise<void> {
        try {
            await this.context.connect();
            const u = new this.context.user({ name: 'www' });
            await u.save();
        }
        catch (e) {
            throw new Error(e);
        } finally {
            debugger
            await this.context.dispose();
        }

    }
}
