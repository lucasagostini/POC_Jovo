import { Component, BaseComponent, Intents, MatchingRouteNotFoundError } from '@jovotech/framework';
import {messages} from './messages';
import { YesNoOutput } from '../output/YesNoOutput';

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
|
| A component consists of handlers that respond to specific user requests
| Learn more here: www.jovo.tech/docs/components, jovo.tech/docs/handlers
|
*/
@Component()
export class BankComponent extends BaseComponent {
  START() {
    const recurringUser = true;
    let msg;
    if(recurringUser == true)
      msg = messages.welcomeRecurringUser;
    else
      msg = messages.welcomeNewUser;
    return this.$send(YesNoOutput, { message: msg, listen: true});
  }

  @Intents(['CheckBalanceIntent'])
  checkBalance() {
    this.$send({ message: messages.checkBalance, listen: true });
    return this.$send({ message: messages.balanceResult, listen: false });
  }
  @Intents(['CancelCardIntent'])
  cancelCard() {
    return this.$send({ message: messages.cancelCard, listen: true });
  }

  @Intents(['MoreInformationIntent'])
  moreInformation() {
    return this.$send({ message: messages.moreInformation, listen: true });
  }

  @Intents(['InformationStoryIntent'])
  infoStory() {
    return this.$send({ message: messages.informationStory, listen: false });
  }
  @Intents(['InfromationBranchesIntent'])
  infoBranches() {
    return this.$send({ message: messages.informationBranches, listen: false });
  }
  @Intents(['InformationClientsIntent'])
  infoClients() {
    return this.$send({ message: messages.informationClients, listen: false });
  }
  UNHANDLED() {
    return this.$send({message: "I am sorry, I could not understand what you meant."});
  }
}
