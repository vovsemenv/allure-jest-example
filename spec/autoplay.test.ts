import { Player, Playlist } from "../player";
import { tracks } from "./test-data";

describe("autoplay", () => {
  allure.owner("eroshenkoam");
  allure.epic("autoplay");

  describe("autoplay false", () => {
    let player: Player;
    const autoplay = false;
    beforeEach(() => {
      player = new Player(false, new Playlist(tracks));
    });

    it("expect to not be playing", () => {
      allure.step(`check initial state when autoplay is ${autoplay}`, () => {
        allure.attachment("songs-list.json", JSON.stringify(tracks), {
          contentType: "application/json",
        });

        expect(player.isPlaying).toBeFalsy();
      });
    });

    it("expect to play after play button", () => {
      allure.description(`Description about this test`);
      allure.step("press play button", () => {
        player.play();
        allure.step("check isPlaying after press play", () => {
          expect(player.isPlaying).toBeTruthy();
        });
      });
      allure.link(
        "link-to-docs",
        "https://github.com/allure-framework/allure-js"
      );
    });

    it("expect to stop after stop button", () => {
      allure.tag("some-tag");
      allure.step("press stop", () => {
        player.stop();
      });
      allure.step("check isPlaying after press stop", () => {
        expect(player.isPlaying).toBeFalsy();
      });
    });
  });

  describe("autoplay true", () => {
    let player: Player;
    const autoplay = true;

    beforeEach(() => {
      player = new Player(autoplay, new Playlist(tracks));
    });

    it(`expect to be playing on init when autoplay is ${autoplay}`, () => {
      allure.feature("autoplay-feature");

      expect(player.isPlaying).toBeTruthy();
    });

    it("expect to play after play button", () => {
      allure.severity("blocker");
      allure.step("press play", () => {
        player.play();
      });

      allure.step("check isPlaying after play", () => {
        expect(player.isPlaying).toBeTruthy();
      });
    });

    it("expect to stop after stop button", () => {
      allure.parameter("NODE_VERSION", process.version);
      allure.step("press stop", () => {
        player.stop();
      });
      allure.step("check isPlaying after stop ", () => {
        expect(player.isPlaying).toBeFalsy();
      });
    });
  });
});
