export class HeroCharacter {
  constructor(name, selectGif, flight, anim, xpRequired) {
    this.name = name;
    this.selectGif = selectGif;
    this.flight = flight;
    this.anim = anim;
    this.xpRequired = xpRequired;
  }
}

export class AllCharacterAnimations {
  constructor(idle, walk, jumpRise, jumpFall, attack) {
    this.idle = idle;
    this.walk = walk;
    this.jumpRise = jumpRise;
    this.jumpFall = jumpFall;
    this.attack = attack;
  }
}

export class CharacterAnimation {
  constructor(img, width, height, frameMax) {
    this.img = img;
    this.width = width;
    this.height = height;
    this.frameMax = frameMax;
  }
}
