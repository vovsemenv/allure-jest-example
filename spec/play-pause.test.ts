import { Status } from "allure-js-commons";
import { Player, Playlist } from "../player";

import { tracks } from "./test-data";

describe("play-pause", () => {
  it("play-pause", () => {
    let player = new Player(false, new Playlist(tracks));

    allure.step("init player", () => {
      player = new Player(false, new Playlist(tracks));
      const firstTrack = tracks[0].name;
      expect(player.currentSong?.name).toBe(firstTrack);
      allure.logStep(`expect curentSong to be ${firstTrack}`, Status.PASSED);
    });

    allure.step("play", () => {
      expect(player.isPlaying).toBeFalsy();
      allure.logStep(`expect player to not play`, Status.PASSED);
      player.play();
      expect(player.isPlaying).toBeTruthy();
      allure.logStep(`expect player to play`, Status.PASSED);
    });
  });
});
