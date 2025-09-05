<template>
    <div class="m-4">
        <UButton to="/" icon="i-lucide:arrow-left" size="xl" class="text-black" />
        <div class="flex flex-col items-center gap-4">
            <div class="flex justify-center px-8 w-full">
                <StyledTitle first="Liste" second="des" third="sessions" />
            </div>
            <ListSessions />
        </div>
    </div>
</template>