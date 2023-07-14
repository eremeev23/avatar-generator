import { defineStore } from "pinia";

export interface Part {
  top: number | string;
  src: string;
  title: string;
  variants: number;
  zIndex: number;
  removable: boolean;
  left?: number;
  bottom?: number;
}

export interface AvatarState {
  avatar: {
    [key: string]: Part
  }
}

export const useAvatarStore = defineStore("avatarStore", {
  state: (): AvatarState => ({
    avatar: {
      head: {
        top: 48,
        src: "head1",
        title: "Head",
        zIndex: 1,
        removable: false,
        variants: 1,
      },
      top: {
        top: -24,
        src: "",
        title: "Top",
        zIndex: 2,
        removable: true,
        variants: 11,
      },
      mouth: {
        top: "auto",
        src: "mouth1",
        title: "Mouth",
        zIndex: 1,
        removable: false,
        variants: 7,
        bottom: 250,
      },
      glasses: {
        top: 112,
        src: "",
        title: "Glasses",
        zIndex: 1,
        removable: true,
        variants: 3,
      },
      eyes: {
        top: 118,
        src: "eyes1",
        title: "Eyes",
        zIndex: 1,
        removable: false,
        variants: 5,
      },
      eyebrows: {
        top: 88,
        src: "eyebrows1",
        title: "EyeBrows",
        zIndex: 1,
        removable: true,
        variants: 6,
      },
      body: {
        top: 214,
        src: "body1",
        title: "Body",
        zIndex: 1,
        removable: false,
        variants: 6,
      },
      background: {
        top: 0,
        left: 0,
        src: "",
        title: "Background",
        zIndex: 0,
        removable: true,
        variants: 3,
      },
      pet: {
        top: "auto",
        bottom: 0,
        left: -20,
        src: "",
        title: "Pet",
        zIndex: 3,
        removable: true,
        variants: 4,
      }
    }
  })
});
