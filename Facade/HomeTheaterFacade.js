export class HomeTheaterFacade {
  constructor(amp, projector, screen) {
    this.amplifier = amp;
    this.projector = projector;
    this.screen = screen;
  }

  watchMovie() {
    this.screen.down();
    this.amplifier.on();
    this.projector.on();
    this.projector.wideMode();
  }

  endMovie() {
    this.amplifier.off();
    this.screen.up();
    this.projector.off();
  }
}
