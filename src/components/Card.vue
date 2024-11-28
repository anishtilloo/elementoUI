<script lang="ts" setup generic="T">
defineProps<{
    imageLink: string;
    cardInfo: T;
}>();
</script>
<template>
    <div class="w-56 h-56 bg-slate-500/30 rounded">
        <div>
            <div>
                <div>
                    <img :src="imageLink" alt="">
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <h3>
                            heading 1234
                        </h3>
                    </div>
                    <div>
                        info
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>