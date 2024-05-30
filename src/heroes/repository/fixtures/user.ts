import { AggregateRoot } from '@nestjs/cqrs';

export class Hero extends AggregateRoot {
  constructor(private readonly id: string) {
    super();
  }

  killEnemy(enemyId: string) {
    // logic
    // this.apply(new HeroKilledDragonEvent(this.id, enemyId));
  }

  addItem(itemId: string) {
    // logic
    // this.apply(new HeroFoundItemEvent(this.id, itemId));
  }
}
