export interface StarPosition {
  id: number;
  left: number;
  top: number;
  delay: number;
}

export interface StarPositions {
  large: StarPosition[];
  medium: StarPosition[];
  small: StarPosition[];
}

export const starPositions: StarPositions = {
  large: [
    { id: 0, left: 15, top: 20, delay: 0.5 },
    { id: 1, left: 85, top: 30, delay: 1.2 },
    { id: 2, left: 25, top: 70, delay: 2.1 },
    { id: 3, left: 75, top: 80, delay: 0.8 },
    { id: 4, left: 45, top: 15, delay: 1.8 },
    { id: 5, left: 90, top: 60, delay: 2.5 },
    { id: 6, left: 10, top: 85, delay: 1.5 },
    { id: 7, left: 60, top: 45, delay: 0.3 },
  ],
  medium: [
    { id: 0, left: 20, top: 25, delay: 0.2 },
    { id: 1, left: 80, top: 35, delay: 1.5 },
    { id: 2, left: 35, top: 75, delay: 2.8 },
    { id: 3, left: 65, top: 85, delay: 1.1 },
    { id: 4, left: 50, top: 10, delay: 3.2 },
    { id: 5, left: 95, top: 55, delay: 0.7 },
    { id: 6, left: 5, top: 90, delay: 2.3 },
    { id: 7, left: 70, top: 40, delay: 1.9 },
    { id: 8, left: 30, top: 50, delay: 0.9 },
    { id: 9, left: 85, top: 15, delay: 2.7 },
    { id: 10, left: 15, top: 65, delay: 1.4 },
    { id: 11, left: 55, top: 95, delay: 0.6 },
    { id: 12, left: 40, top: 30, delay: 2.1 },
    { id: 13, left: 90, top: 75, delay: 1.7 },
    { id: 14, left: 25, top: 5, delay: 3.0 },
  ],
  small: [
    { id: 0, left: 12, top: 18, delay: 0.1 },
    { id: 1, left: 88, top: 28, delay: 1.3 },
    { id: 2, left: 32, top: 68, delay: 2.6 },
    { id: 3, left: 72, top: 78, delay: 0.9 },
    { id: 4, left: 48, top: 8, delay: 3.1 },
    { id: 5, left: 92, top: 52, delay: 0.8 },
    { id: 6, left: 8, top: 88, delay: 2.4 },
    { id: 7, left: 68, top: 38, delay: 1.6 },
    { id: 8, left: 28, top: 48, delay: 1.0 },
    { id: 9, left: 82, top: 12, delay: 2.9 },
    { id: 10, left: 18, top: 62, delay: 1.2 },
    { id: 11, left: 58, top: 92, delay: 0.5 },
    { id: 12, left: 42, top: 22, delay: 2.2 },
    { id: 13, left: 78, top: 72, delay: 1.8 },
    { id: 14, left: 22, top: 2, delay: 2.7 },
    { id: 15, left: 62, top: 42, delay: 0.4 },
    { id: 16, left: 38, top: 82, delay: 1.9 },
    { id: 17, left: 98, top: 58, delay: 2.1 },
    { id: 18, left: 6, top: 38, delay: 0.7 },
    { id: 19, left: 52, top: 18, delay: 2.5 },
    { id: 20, left: 76, top: 48, delay: 1.4 },
    { id: 21, left: 36, top: 88, delay: 0.3 },
    { id: 22, left: 86, top: 8, delay: 2.8 },
    { id: 23, left: 16, top: 72, delay: 1.7 },
    { id: 24, left: 56, top: 28, delay: 0.6 },
  ],
};
