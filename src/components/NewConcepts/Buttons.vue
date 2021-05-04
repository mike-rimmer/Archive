<template>
  <div>
    <h3>Buttons</h3>
    <v-card class="mt-5 mb-8">
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-btn
              text
              rounded
            >
              Normal
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-btn
              tile
              outlined
              color="success"
            >
              <v-icon left>
                mdi-pencil
              </v-icon> Edit
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-btn
              text
              icon
              color="pink"
            >
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            Just a Guess
            <v-btn
              text
              icon
              color="deep-orange"
            >
              <v-icon>mdi-thumb-up</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn
              class="mx-2 yellow grey--text elevation-"
              fab
              dark
            >
              <v-icon dark>
                mdi-thumb-up
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>
