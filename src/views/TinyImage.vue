<template>
  <div class="tetris">
    <div class="board">
      <div
        v-for="(row, rowIndex) in board"
        :key="rowIndex"
        class="row"
      >
        <div
          v-for="(cell, colIndex) in row"
          :key="colIndex"
          :class="['cell', `cell-${cell}`]"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';

const tetrominoes = [
  [[1, 1, 1, 1]], // I
  [[1, 1, 1], [0, 1, 0]], // T
  [[1, 1, 0], [0, 1, 1]], // S
  [[0, 1, 1], [1, 1, 0]], // Z
  [[1, 1], [1, 1]], // O
];

export default {
  setup() {
    const rows = 20;
    const cols = 10;
    const initialX = 3;
    const initialY = 0;

    const board = ref([]);

    const generateEmptyRow = () => Array(cols).fill(0);
    
    const resetBoard = () => {
      board.value = Array(rows).fill().map(generateEmptyRow);
    };

    const createTetromino = () => {
      const tetrominoIndex = Math.floor(Math.random() * tetrominoes.length);
      return {
        shape: tetrominoes[tetrominoIndex],
        x: initialX,
        y: initialY,
      };
    };

    onMounted(() => {
      resetBoard();
    });

    return {
      board,
    };
  },
};
</script>

<style>
/* ...same styles as before... */
</style>
