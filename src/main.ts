import Button1 from "./components/Button.vue"
import HelloWorld1 from "./components/HelloWorld.vue";
import Card from "./components/Card.vue";
import ImageCard from "./components/Card/ImageCard.vue";
import TextCard from "./components/Card/TextCard.vue";
import InputText from "./components/Input/Text.vue";
import InputTextArea from "./components/Input/TextArea.vue";
import TextButton from "./components/Button/TextButton.vue";

import Timeline from "./components/Timeline/index.vue";
import TimelineCardWithIndex from "./components/Timeline/CardWithIndex.vue";

import type { CardInformation } from "./types/timeline.types";

import "./style.css";

export {
    Button1,
    HelloWorld1,
    Card,

    // Inputs
    InputText,
    InputTextArea,

    // Cards
    ImageCard,
    TextCard,

    // Buttons
    TextButton,

    // Custom UI Components
    // Timeline
    Timeline,
    TimelineCardWithIndex,
};

export default {
    Button1,
    HelloWorld1,
    Card,
    // Inputs
    InputText,
    InputTextArea,

    // Cards
    ImageCard,
    TextCard,

    // Buttons
    TextButton,

    // Custom UI Components
    // Timeline
    Timeline,
    TimelineCardWithIndex,
}

export type {
    CardInformation,
}