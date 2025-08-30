<script setup lang="ts">
import SessionForm from '~/components/SessionForm.vue';
import StyledTitle from '~/components/StyledTitle.vue';
</script>

<template>
    <div class="m-4">
        <UButton to="/" icon="i-lucide:arrow-left" size="xl" />
        <div class="flex flex-col items-center gap-4">
            <StyledTitle first="Session" second="de" third="formation" />
            <SessionForm />
        </div>
    </div>
</template>