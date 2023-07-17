import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import SongItem from "@/components/SongItem.vue";
import { describe, test, expect } from 'vitest';

describe("Snapshots SongItem.vue", () => {
    test("renders correctly", () => {
        const song = {
            docID: "abc",
            modified_name: "test",
            display_name: "test",
            comment_count: 5,
        }

        const wrapper = shallowMount(SongItem, {
            propsData: { song },
            global: {
                components: {
                    "router-link": RouterLinkStub,
                }
            }
        });
        console.log(wrapper, song);
        expect(wrapper.element).toMatchFileSnapshot();
    })
})
