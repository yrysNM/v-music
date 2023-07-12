import SongItem from "../../components/SongItem.vue";
import { shallowMount } from "@vue/test-utils";

describe("SongItem.vue", () => {
    test("render song.display_name", () => {
        const song = {
            display_name: "test"
        }
        
        const wrapper = shallowMount(SongItem, {
            propsData: {
                song, 
            }
        });

        expect(wrapper.text()).toContain(song.display_name);
    });
})