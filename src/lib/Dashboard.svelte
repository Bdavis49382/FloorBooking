<script>
    import { user } from "./stores.svelte";
</script>
{#if user.isLoggedIn}
    <p>Logged In</p>
    {:else}
    <p>Log In</p>
{/if}
