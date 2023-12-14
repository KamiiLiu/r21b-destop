<template lang="pug">
.wrap.position-relative
    Header
    SettingPanel(@submit='submitSetting' @alert='popUpAlertModal')
    FooterCopyright.position-absolute.bottom-0.start-0
    Alert(:show='modalShow' @update:modalShow="modalShow = $event")
</template>
<script lang="ts">
//TODO:"your-data-path"
//import { useDatabase, ref } from "@vueuse/firebase";

import "bootstrap-icons/font/bootstrap-icons.css";
import { ref, computed, watch, defineComponent } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Header from "@/components/setting/Header.vue";
import SettingPanel from "@/components/setting/SettingPanel.vue";
import FooterCopyright from "@/components/setting/FooterCopyright.vue";
import Alert from "@/components/setting/Alert.vue";
import { getDatabase, ref as firebaseRef, push } from "firebase/database";
import firebaseApp from '@/firebase/firebaseConfig';
import Setting from "@/interfaces/SettingInterface";
import GameMode from "@/interfaces/GameModeInterface";
import dayjs from '@/utils/dayjs';
export default defineComponent({
    name:'GameSetting',
    components: {
        FooterCopyright,
        SettingPanel,
        Alert,
        Header
    },
    setup() {
        const date=dayjs.tz(new Date()).format('YYYY-MM-DD')
        // const data = useDatabase(dataRef);
        const router = useRouter();
        const store = useStore();
        function submitSetting({ data, gameMode }: { data: Setting; gameMode: GameMode }) {
            store.dispatch("updateGameSetting", data);
            sendDataToFirebase(data);
            router.push({ path: `/game/${gameMode.route}` });
        }

        let modalShow = ref<boolean>(false);
        function popUpAlertModal() {
            modalShow.value = true;
        }

        const database = getDatabase(firebaseApp);
        const listRef = firebaseRef(database, date);
        function sendDataToFirebase(data: Setting) {
            push(listRef, data)
                .then(() => {
                    console.log('Data saved successfully!');
                })
                .catch((error) => {
                    console.error('Failed to save data', error);
                });
        };
        
        return {
            modalShow,
            submitSetting,
            popUpAlertModal
        };
    },
});
</script>
<style lang="scss" scoped>
::v-deep {
    .banner-wrap {
        background-color: $red-primary-color;
        padding: 20px 0;
    }

    .mx-1280 {

        margin: 0 auto;
        max-width: 1280px;
    }

}
</style>
