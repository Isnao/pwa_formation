<script setup lang="ts">
import { UButton, ULink, UModal } from '#components';

useHead({
  title: 'Application Formation Acadia',
  meta: [
    { name: 'description', content: 'Application pour aider à la formation de l\'association Acadia' }
  ]
})
</script>

<template>
  <div class="p-home">
    <div class="p-home-top">
      <div class="p-home-title text-black">
        <div class="p-home-title__first">
          Prêt pour
        </div>
        <div class="p-home-title__second">
          l'aventure
        </div>
      </div>
      <div class="p-home-brand">
        <span class="p-home-brand__A">A</span>
        <span class="p-home-brand__CA">CA</span>
        <span class="p-home-brand__DIA">DIA</span>
      </div>
      <img class="p-home-logo" src="/ic_launcher_icon_512.png" />
    </div>
    <div class="p-home-buttons">
      <UButton to="/session" color="secondary" class="p-home-button text-2xl">Commencer une session</UButton>
      <UButton to="/bilan" color="secondary" class="p-home-button text-2xl">Bilan des compétences</UButton>
      <UButton to="/list" color="secondary" class="p-home-button text-2xl">Liste des sessions</UButton>
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

<style lang="scss">
.p-home{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 3rem;

  &-top{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
  
  &-title{
    display: flex;
    flex-direction: column;
    align-items: center;

    &__first{
      font-size: 2rem;
      text-transform: uppercase;
    }

    &__second{
      font-size: 3rem;
      text-transform: uppercase;
    }
  }

  &-brand{
    font-size: 4rem;
    font-family: 'Baloo Thambi 2';
    font-weight: 700;

    &__A{
      color: #562583
    }

    &__CA{
      color: #2486C8
    }

    &__DIA{
      color: #84bf2c
    }
  }

  &-logo{
    width: 7rem;
    background-color: var(--ui-secondary);
    border-radius: 50%;
  }

  &-buttons{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }

  &-button{
    box-shadow: 0rem 0.4rem 0.4rem 0rem var(--color-primary-950);
    border-radius: 1rem;
    padding: 1rem;
    width: 100%;
    cursor: pointer;
    justify-content: center;
  }
}

</style>