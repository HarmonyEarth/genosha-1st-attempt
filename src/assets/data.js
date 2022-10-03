import {
  AllCharacterAnimations,
  CharacterAnimation,
  HeroCharacter,
} from '../models/hero';
import { Level } from '../models/level';

const Rogue = new HeroCharacter(
  'Rogue',
  'https://www.fightersgeneration.com/characters3/rogue_stance.gif',
  true,
  new AllCharacterAnimations(
    new CharacterAnimation(
      'https://cdn.discordapp.com/attachments/979434546271510639/979434649719832626/idle.png',
      95,
      101,
      70
    ),
    new CharacterAnimation(
      'https://cdn.discordapp.com/attachments/979434546271510639/979765058915667978/walk.png',
      94,
      114,
      20
    ),
    new CharacterAnimation('', 0, 0, 0),
    new CharacterAnimation('', 0, 0, 0),
    new CharacterAnimation('', 0, 0, 0)
  ),
  0
);

const Gambit = new HeroCharacter(
  'Gambit',
  'https://www.fightersgeneration.com/characters/gambit-stance-better.gif',
  false,
  new AllCharacterAnimations(
    new CharacterAnimation('', 0, 0, 0),
    new CharacterAnimation('', 0, 0, 0),
    new CharacterAnimation('', 0, 0, 0),
    new CharacterAnimation('', 0, 0, 0),
    new CharacterAnimation('', 0, 0, 0)
  ),
  5
);
const Storm = new HeroCharacter(
  'Storm',
  'https://www.fightersgeneration.com/characters3/storm-better-stance.gif',
  true,
  new AllCharacterAnimations(
    new CharacterAnimation('', 0, 0, 0),
    new CharacterAnimation('', 0, 0, 0),
    new CharacterAnimation('', 0, 0, 0),
    new CharacterAnimation('', 0, 0, 0),
    new CharacterAnimation('', 0, 0, 0)
  ),
  10
);

const Cyclops = new HeroCharacter(
  'Cyclops',
  'https://www.fightersgeneration.com/characters/cyc-tnt.gif',
  false,
  new AllCharacterAnimations(
    new CharacterAnimation('', 0, 0, 0),
    new CharacterAnimation('', 0, 0, 0),
    new CharacterAnimation('', 0, 0, 0),
    new CharacterAnimation('', 0, 0, 0),
    new CharacterAnimation('', 0, 0, 0)
  ),
  15
);

const Psylocke = new HeroCharacter(
  'Psylocke',
  'https://www.fightersgeneration.com/characters3/psylocke-charge.gif',
  false,
  new AllCharacterAnimations(
    new CharacterAnimation('', 0, 0, 0),
    new CharacterAnimation('', 0, 0, 0),
    new CharacterAnimation('', 0, 0, 0),
    new CharacterAnimation('', 0, 0, 0),
    new CharacterAnimation('', 0, 0, 0)
  ),
  20
);

const Cable = new HeroCharacter(
  'Cable',
  'https://www.fightersgeneration.com/np6/char2/anims/cable-stance.gif',
  false,
  new AllCharacterAnimations(
    new CharacterAnimation('', 0, 0, 0),
    new CharacterAnimation('', 0, 0, 0),
    new CharacterAnimation('', 0, 0, 0),
    new CharacterAnimation('', 0, 0, 0),
    new CharacterAnimation('', 0, 0, 0)
  ),
  25
);

const Wolverine = new HeroCharacter(
  'Wolverine',
  'https://www.fightersgeneration.com/characters4/wolvie-claws.gif',
  false,
  new AllCharacterAnimations(
    new CharacterAnimation('', 0, 0, 0),
    new CharacterAnimation('', 0, 0, 0),
    new CharacterAnimation('', 0, 0, 0),
    new CharacterAnimation('', 0, 0, 0),
    new CharacterAnimation('', 0, 0, 0)
  ),
  30
);

const Deadpool = new HeroCharacter(
  'Deadpool',
  'https://www.infinitymugenteam.com/images/AceySprites/deadpool.gif',
  false,
  new AllCharacterAnimations(
    new CharacterAnimation('', 0, 0, 0),
    new CharacterAnimation('', 0, 0, 0),
    new CharacterAnimation('', 0, 0, 0),
    new CharacterAnimation('', 0, 0, 0),
    new CharacterAnimation('', 0, 0, 0)
  ),
  35
);
export const Heroes = [
  Rogue,
  Gambit,
  Storm,
  Cyclops,
  Psylocke,
  Cable,
  Wolverine,
  Deadpool,
];

const Park = new Level(
  'Park',
  'https://www.fightersgeneration.com/nf9/game/stage/2/xmen-vs-streetfighter-stage-showdown-at-the-park.gif'
);

const Mall = new Level(
  'Mall',
  'https://www.fightersgeneration.com/nf9/game/stage/xmen-vs-streetfighter-mall-stage.gif'
);

const Forest = new Level(
  'Forest',
  'https://www.fightersgeneration.com/nf9/game/stage/2/xmen-vs-streetfighter-stage-the-cataracts.gif'
);

const Roof = new Level(
  'Roof',
  'https://www.fightersgeneration.com/news2021/game4/stages/marvelvscapcom-daily-bugle-stage.gif'
);
const Horizon = new Level(
  'Horizon',
  'https://www.fightersgeneration.com/nf9/game/stage/mvc-stage-cliff-of-desolation.gif'
);
export const Levels = [Mall, Forest, Roof, Horizon];
