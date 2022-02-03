<template>
    <div id="footer">
        <div class="Inner">
            <div class="Copyrights">
                <p>Copyright test approach limited. All rights reserved.</p>
                <p>Test approach limited is registered in England #123456789.</p>
            </div>
            <div class="logo">
                <img src="../assets/logo.svg" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
export default {

  name: 'Footer',
  
}
</script>

<style>
#footer {
    background: #333;
    color: white;
    width: 100vw;
}
#footer .Inner {
  display: flex;
  flex-direction: row;
  width: 50vw;
  margin: auto;
  color: white;
  text-align: left;
}
#footer .Inner .Copyrights {
    font-size: 13px;
}
#footer .Inner .logo {
    width: 10vw;
    margin-left: auto;
    margin-right: 0;
}

@media only screen and (max-width: 600px) {
    #footer .Inner {
        display: flex;
        flex-direction: column;
        padding: 2em;
    }
    #footer .Inner .logo {
        width: 100vw !important;
        margin-left: auto;
        margin-right: 0;
        padding-bottom: 2em;
    }
}
</style>