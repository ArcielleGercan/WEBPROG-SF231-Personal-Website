import { ref, computed, onMounted } from "vue";
import { PhotoService } from '@/service/PhotoService';

onMounted(() => {
  PhotoService.getImages().then((data) => (images.value = data));
  bindDocumentListeners();
});

const galleria = ref();
const images = ref();
const activeIndex = ref(0);
const showThumbnails = ref(false);
const fullScreen = ref(false);
const isAutoPlay = ref(true);

const toggleAutoSlide = () => {
  isAutoPlay.value = !isAutoPlay.value;
};

const onThumbnailButtonClick = () => {
  showThumbnails.value = !showThumbnails.value;
};

const responsiveOptions = ref([
  { breakpoint: '1300px', numVisible: 4 },
  { breakpoint: '575px', numVisible: 1 }
]);

const toggleFullScreen = () => {
  if (fullScreen.value) {
    closeFullScreen();
  } else {
    openFullScreen();
  }
};

const onFullScreenChange = () => {
  fullScreen.value = !fullScreen.value;
};

const openFullScreen = () => {
  let elem = galleria.value.$el;
  if (elem.requestFullscreen) elem.requestFullscreen();
  else if (elem.mozRequestFullScreen) elem.mozRequestFullScreen();
  else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
  else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
};

const closeFullScreen = () => {
  if (document.exitFullscreen) document.exitFullscreen();
  else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
  else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
  else if (document.msExitFullscreen) document.msExitFullscreen();
};

const bindDocumentListeners = () => {
  document.addEventListener('fullscreenchange', onFullScreenChange);
  document.addEventListener('mozfullscreenchange', onFullScreenChange);
  document.addEventListener('webkitfullscreenchange', onFullScreenChange);
  document.addEventListener('msfullscreenchange', onFullScreenChange);
};

const unbindDocumentListeners = () => {
  document.removeEventListener('fullscreenchange', onFullScreenChange);
  document.removeEventListener('mozfullscreenchange', onFullScreenChange);
  document.removeEventListener('webkitfullscreenchange', onFullScreenChange);
  document.removeEventListener('msfullscreenchange', onFullScreenChange);
};

const fullScreenIcon = computed(() => {
  return `pi ${fullScreen.value ? 'pi-window-minimize' : 'pi-window-maximize'}`;
});

const slideButtonIcon = computed(() => {
  return `pi ${isAutoPlay.value ? 'pi-pause' : 'pi-play'}`;
});
