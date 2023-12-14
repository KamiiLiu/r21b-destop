<template lang="pug">
.wrap.position-relative
    MainHeader
    SettingPanel(@submit='submitSetting' @alert='popUpAlertModal')
    FooterCopyright.position-absolute.bottom-0.start-0
    CustomAlert(:show='modalShow' @update:modalShow="modalShow = $event")
</template>
<script lang="ts">
//TODO:"your-data-path"
//import { useDatabase, ref } from "@vueuse/firebase";

import "bootstrap-icons/font/bootstrap-icons.css";
import { ref, computed, watch, defineComponent } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import MainHeader from "@/components/setting/MainHeader.vue";
import SettingPanel from "@/components/setting/SettingPanel.vue";
import FooterCopyright from "@/components/setting/FooterCopyright.vue";
import CustomAlert from "@/components/setting/CustomAlert.vue";
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
        CustomAlert,
        MainHeader
    },
    setup() {
        const date=dayjs.tz(new Date()).format('YYYY-MM-DD')
        // const data = useDatabase(dataRef);
        const router = useRouter();
        const store = useStore();
        function submitSetting({ setting, gameMode }: { setting: Setting; gameMode: GameMode }) {
            console.log('son',setting);
            console.log('son',gameMode);
            store.dispatch("updateGameSetting", setting);
            sendDataToFirebase(setting);
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
