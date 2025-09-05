<script setup lang="ts">
import { UButton, ULink, UModal } from '#components';

const { $pwa } = useNuxtApp()
const toast = useToast()

onMounted(() => {
  if ($pwa?.showInstallPrompt && !$pwa.offlineReady && !$pwa.needRefresh) {
    toast.add({
      title: 'Pour installer l\'application, veuillez cliquer ici',
      color: 'info',
      actions: [{ label: 'Installer', onClick: () => {$pwa.install()} }]
    })
  }
  if ($pwa?.needRefresh) {
    toast.add({
      title: 'Une mise à jour est disponible, veuillez cliquer ici',
      color: 'warning',
      actions: [{ label: 'Mettre à jour', onClick: () => {$pwa.updateServiceWorker()} }]
    })
  }
})

useHead({
  title: 'Application Formation Acadia',
  meta: [
    { name: 'description', content: 'Application pour aider à la formation de l\'association Acadia' }
  ]
})
</script>

<template>
  <div class="flex flex-col items-center gap-12 p-12">
    <div class="flex flex-col items-center gap-2">
      <div class="flex flex-col items-center text-black">
        <div class="text-[2rem] uppercase">
          Prêt pour
        </div>
        <div class="text-[3rem] uppercase">
          l'aventure
        </div>
      </div>
      <div class="text-[4rem] font-mono font-bold">
        <span class="text-violet-900">A</span>
        <span class="text-blue-400">CA</span>
        <span class="text-lime-500">DIA</span>
      </div>
      <img class="w-28 bg-primary-700 rounded-full" src="/ic_launcher_icon_512.png" />
    </div>
    <div class="flex flex-col items-center gap-12">
      <UButton to="/session" color="secondary" class="rounded-2xl p-4 w-full justify-center text-black text-2xl shadow-(--shadow-home)">Commencer une session</UButton>
      <UButton to="/bilan" color="secondary" class="rounded-2xl p-4 w-full justify-center text-black text-2xl shadow-(--shadow-home)">Bilan des compétences</UButton>
      <UButton to="/list" color="secondary" class="rounded-2xl p-4 w-full justify-center text-black text-2xl shadow-(--shadow-home)">Liste des sessions</UButton>
    </div>
    <UModal
      title="Connexion"
      :close="{
        color: 'primary',
        variant: 'ghost',
        class: 'rounded-full'
      }">
      <ULink class="cursor-pointer font-bold text-blue-400 hover:text-blue-950 underline text-2xl">
        s'identifier
      </ULink>

      <template #body>
        <div class="h-24 m-4">À développer</div>
      </template>
    </UModal>
  </div>
</template>