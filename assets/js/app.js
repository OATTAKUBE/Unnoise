/**
 * Unnoise Smart Sleep Pillow - Interactive Application Logic (v2.0)
 * Features:
 * 1. Sleep Dashboard Simulator (Dynamic states & SVG circular score)
 * 2. Real-time Canvas Pulse Wave (ECG/BCG heart rate monitor)
 * 3. In-Browser Web Audio API Synthesis (Rain / Pink Noise / Breeze)
 * 4. Strava-Style Interactive Kudos & Community Interactions
 * 5. Pre-order Modal & Toast Notification
 * 6. Responsive Mobile Menu
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initDashboardSimulator();
  initPulseCanvas();
  initAudioTherapy();
  initStravaCommunity();
  initPreorderModal();
  initSmoothScroll();
  initShopFilters();
  initPillowFinderQuiz();
});

/* ==========================================================================
   1. Sleep Dashboard Simulator
   ========================================================================== */
const sleepData = {
  restorative: {
    score: 92,
    scoreOffset: 18, // SVG dashoffset
    scoreColor: '#2563EB',
    bpm: 54,
    bpmStatus: 'จังหวะหัวใจสม่ำเสมอ พักผ่อนลึก',
    snoreDb: 12,
    snoreStatus: 'เงียบสงบ ไม่พบเสียงกรน',
    snoreColor: '#2563EB',
    pillowHeight: '+0.0 ซม. (ระดับปกติ)',
    deepPercent: '38%',
    remPercent: '24%',
    lightPercent: '32%',
    awakePercent: '6%',
    deepTime: '2 ชม. 45 นาที',
    remTime: '1 ชม. 45 นาที',
    lightTime: '2 ชม. 20 นาที',
    awakeTime: '25 นาที',
    totalSleep: '7 ชม. 15 นาที',
    coachTitle: 'การประเมินจาก Unnoise AI Sleep Coach: ยอดเยี่ยม',
    coachText: 'ตลอดการนอน 7 ชม. 15 นาที ร่างกายของคุณเข้าสู่สภาวะหลับลึก (Deep Sleep) ถึง 38% ซึ่งสูงกว่าเกณฑ์เฉลี่ยถึง 15% หมอนรองรับแนวกระดูกต้นคอได้สมดุล อุณหภูมิผิวสัมผัสคงที่ 24.8°C ไม่พบการตื่นกลางดึก'
  },
  restless: {
    score: 65,
    scoreOffset: 77, // SVG dashoffset
    scoreColor: '#EA580C',
    bpm: 72,
    bpmStatus: 'หัวใจเต้นเร็วช่วงตี 3 จากการพลิกตัว',
    snoreDb: 48,
    snoreStatus: 'ตรวจพบเสียงกรน (ระดับปานกลาง)',
    snoreColor: '#EA580C',
    pillowHeight: '+1.8 ซม. (ปรับยกเปิดทางเดินหายใจ)',
    deepPercent: '16%',
    remPercent: '18%',
    lightPercent: '51%',
    awakePercent: '15%',
    deepTime: '1 ชม. 05 นาที',
    remTime: '1 ชม. 15 นาที',
    lightTime: '3 ชม. 30 นาที',
    awakeTime: '1 ชม. 00 นาที',
    totalSleep: '6 ชม. 50 นาที',
    coachTitle: 'การประเมินจาก Unnoise AI Sleep Coach: ตรวจพบการกรนและทางเดินหายใจแคบ',
    coachText: 'เวลา 02:45 น. เซนเซอร์ตรวจจับเสียงกรน 48dB และรอบหายใจสะดุด หมอน Unnoise ได้ค่อยๆ พองถุงลมไมโครแอร์แบ็กยกความสูงขึ้น 1.8 ซม. อย่างนุ่มนวลเพื่อเปิดทางเดินหายใจ ช่วยให้เสียงกรนลดลงและกลับสู่การหายใจปกติ'
  }
};

let currentMode = 'restorative';

function initDashboardSimulator() {
  const modeBtns = document.querySelectorAll('.mode-btn');
  if (!modeBtns.length) return;

  modeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const mode = btn.getAttribute('data-mode');
      if (mode && sleepData[mode]) {
        currentMode = mode;
        updateDashboardView(sleepData[mode]);
      }
    });
  });

  // initial setup
  updateDashboardView(sleepData.restorative);
}

function updateDashboardView(data) {
  // Score dial
  const scoreNum = document.getElementById('dash-score-num');
  const scoreCircle = document.getElementById('dash-score-circle');
  if (scoreNum && scoreCircle) {
    animateValue(scoreNum, parseInt(scoreNum.textContent) || 0, data.score, 600);
    scoreCircle.style.strokeDashoffset = data.scoreOffset;
    scoreCircle.style.stroke = data.scoreColor;
  }

  // Heart Rate
  const bpmVal = document.getElementById('dash-bpm-val');
  const bpmSub = document.getElementById('dash-bpm-sub');
  if (bpmVal) animateValue(bpmVal, parseInt(bpmVal.textContent) || 0, data.bpm, 500);
  if (bpmSub) bpmSub.textContent = data.bpmStatus;

  // Snore
  const snoreVal = document.getElementById('dash-snore-val');
  const snoreSub = document.getElementById('dash-snore-sub');
  if (snoreVal) animateValue(snoreVal, parseInt(snoreVal.textContent) || 0, data.snoreDb, 500);
  if (snoreSub) {
    snoreSub.textContent = data.snoreStatus;
    snoreSub.style.color = data.snoreColor;
  }

  // Pillow adjustment
  const pillowAdj = document.getElementById('dash-pillow-adj');
  if (pillowAdj) pillowAdj.textContent = data.pillowHeight;

  // Stages bar
  const segDeep = document.getElementById('seg-deep');
  const segRem = document.getElementById('seg-rem');
  const segLight = document.getElementById('seg-light');
  const segAwake = document.getElementById('seg-awake');

  if (segDeep) segDeep.style.width = data.deepPercent;
  if (segRem) segRem.style.width = data.remPercent;
  if (segLight) segLight.style.width = data.lightPercent;
  if (segAwake) segAwake.style.width = data.awakePercent;

  // Legend times
  const timeDeep = document.getElementById('time-deep');
  const timeRem = document.getElementById('time-rem');
  const timeLight = document.getElementById('time-light');
  const timeAwake = document.getElementById('time-awake');
  if (timeDeep) timeDeep.textContent = `${data.deepPercent} (${data.deepTime})`;
  if (timeRem) timeRem.textContent = `${data.remPercent} (${data.remTime})`;
  if (timeLight) timeLight.textContent = `${data.lightPercent} (${data.lightTime})`;
  if (timeAwake) timeAwake.textContent = `${data.awakePercent} (${data.awakeTime})`;

  // Coach Insights
  const coachTitle = document.getElementById('dash-coach-title');
  const coachText = document.getElementById('dash-coach-text');
  if (coachTitle) coachTitle.textContent = data.coachTitle;
  if (coachText) coachText.textContent = data.coachText;
}

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

/* ==========================================================================
   2. Real-time Heart Rate Pulse Canvas
   ========================================================================== */
function initPulseCanvas() {
  const canvas = document.getElementById('pulse-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = canvas.parentElement.clientWidth || 200);
  let height = (canvas.height = 48);

  window.addEventListener('resize', () => {
    if (canvas.parentElement) {
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 48;
    }
  });

  let points = new Array(Math.floor(width / 2)).fill(height / 2);
  let step = 0;

  function renderWave() {
    step++;
    const speed = currentMode === 'restorative' ? 1.4 : 2.2;
    const isBeating = step % (currentMode === 'restorative' ? 45 : 30) < 6;

    let newY = height / 2;
    if (isBeating) {
      const beatOffset = step % (currentMode === 'restorative' ? 45 : 30);
      if (beatOffset === 1) newY = height / 2 - 4;
      else if (beatOffset === 2) newY = height / 2 - 18; // R peak
      else if (beatOffset === 3) newY = height / 2 + 12; // S valley
      else if (beatOffset === 4) newY = height / 2 - 6;  // T wave
    } else {
      // micro noise
      newY = height / 2 + (Math.random() - 0.5) * 1.5;
    }

    points.shift();
    points.push(newY);

    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = currentMode === 'restorative' ? '#2563EB' : '#EA580C';

    const dx = width / (points.length - 1);
    for (let i = 0; i < points.length; i++) {
      const x = i * dx;
      const y = points[i];
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    requestAnimationFrame(renderWave);
  }

  requestAnimationFrame(renderWave);
}

/* ==========================================================================
   3. In-Browser Web Audio API Synthesis
   ========================================================================== */
let audioCtx = null;
let noiseNode = null;
let gainNode = null;
let filterNode = null;
let isAudioPlaying = false;
let currentPreset = 'rain';

function initAudioTherapy() {
  const playBtn = document.getElementById('sound-play-btn');
  const soundBtns = document.querySelectorAll('.sound-btn');
  const volumeSlider = document.getElementById('volume-slider');
  const soundWaveCanvas = document.getElementById('sound-wave-canvas');

  if (!playBtn) return;

  // Preset buttons
  soundBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      soundBtns.forEach(b => {
        b.classList.remove('active');
        const icon = b.querySelector('.sound-state-icon i');
        if (icon) icon.className = 'bi bi-play';
      });
      btn.classList.add('active');
      const icon = btn.querySelector('.sound-state-icon i');
      if (icon) icon.className = 'bi bi-check2';

      currentPreset = btn.getAttribute('data-sound') || 'rain';
      if (isAudioPlaying) {
        startNoiseSound();
      }
    });
  });

  // Play / Pause Toggle
  playBtn.addEventListener('click', () => {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    if (!isAudioPlaying) {
      startNoiseSound();
      playBtn.innerHTML = '<i class="bi bi-pause-fill"></i>';
      playBtn.classList.add('playing');
      isAudioPlaying = true;
      showToast('กำลังเล่นเสียงบำบัดกลบเสียงรบกวน (Web Audio API)');
    } else {
      stopNoiseSound();
      playBtn.innerHTML = '<i class="bi bi-play-fill"></i>';
      playBtn.classList.remove('playing');
      isAudioPlaying = false;
    }
  });

  // Volume Slider
  if (volumeSlider) {
    volumeSlider.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      if (gainNode) {
        gainNode.gain.setValueAtTime(val, audioCtx.currentTime);
      }
    });
  }

  // Wave Visualizer
  initSoundWaveCanvas(soundWaveCanvas);
}

function startNoiseSound() {
  stopNoiseSound();
  if (!audioCtx) return;

  const bufferSize = audioCtx.sampleRate * 2;
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const output = buffer.getChannelData(0);

  if (currentPreset === 'rain') {
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.09;
      b6 = white * 0.115926;
    }
  } else if (currentPreset === 'pink') {
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99 * b0 + white * 0.05;
      b1 = 0.95 * b1 + white * 0.1;
      b2 = 0.85 * b2 + white * 0.25;
      b3 = 0.50 * b3 + white * 0.5;
      output[i] = (b0 + b1 + b2 + b3) * 0.08;
    }
  } else {
    let last = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      last = 0.96 * last + 0.04 * white;
      output[i] = last * 0.6;
    }
  }

  noiseNode = audioCtx.createBufferSource();
  noiseNode.buffer = buffer;
  noiseNode.loop = true;

  filterNode = audioCtx.createBiquadFilter();
  if (currentPreset === 'rain') {
    filterNode.type = 'lowpass';
    filterNode.frequency.value = 1400;
  } else if (currentPreset === 'pink') {
    filterNode.type = 'lowpass';
    filterNode.frequency.value = 900;
  } else {
    filterNode.type = 'bandpass';
    filterNode.frequency.value = 450;
    filterNode.Q.value = 1.2;
  }

  gainNode = audioCtx.createGain();
  const volumeSlider = document.getElementById('volume-slider');
  const initialVol = volumeSlider ? parseFloat(volumeSlider.value) : 0.4;
  gainNode.gain.setValueAtTime(initialVol, audioCtx.currentTime);

  noiseNode.connect(filterNode);
  filterNode.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  noiseNode.start();
}

function stopNoiseSound() {
  if (noiseNode) {
    try {
      noiseNode.stop();
      noiseNode.disconnect();
    } catch (e) {}
    noiseNode = null;
  }
}

function initSoundWaveCanvas(canvas) {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width = (canvas.width = canvas.parentElement.clientWidth || 280);
  let height = (canvas.height = 70);

  window.addEventListener('resize', () => {
    if (canvas.parentElement) {
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 70;
    }
  });

  let phase = 0;

  function draw() {
    ctx.clearRect(0, 0, width, height);

    if (isAudioPlaying) {
      phase += 0.08;
      ctx.beginPath();
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = '#2563EB';

      for (let x = 0; x < width; x++) {
        const y =
          height / 2 +
          Math.sin(x * 0.04 + phase) * 14 * Math.sin(x * 0.01) +
          Math.sin(x * 0.08 - phase * 1.5) * 6;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      ctx.beginPath();
      ctx.lineWidth = 1.2;
      ctx.strokeStyle = 'rgba(37, 99, 235, 0.3)';
      for (let x = 0; x < width; x++) {
        const y = height / 2 + Math.cos(x * 0.03 - phase) * 10;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = '#CBD5E1';
      ctx.moveTo(0, height / 2);
      ctx.lineTo(width, height / 2);
      ctx.stroke();
    }

    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
}

/* ==========================================================================
   4. Strava-Style Community & Kudos Interaction (NEW)
   ========================================================================== */
function initStravaCommunity() {
  const kudosButtons = document.querySelectorAll('.kudos-btn');

  kudosButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const countSpan = btn.querySelector('.kudos-count');
      const icon = btn.querySelector('i');
      let count = parseInt(countSpan.textContent) || 0;

      if (!btn.classList.contains('active')) {
        btn.classList.add('active');
        count++;
        countSpan.textContent = count;
        if (icon) icon.className = 'bi bi-hand-thumbs-up-fill';
        showToast('ให้ Kudos เพื่อนสำเร็จ! 🎉 การนอนที่ดีคู่ควรกับเสียงปรบมือ');
      } else {
        btn.classList.remove('active');
        count--;
        countSpan.textContent = count;
        if (icon) icon.className = 'bi bi-hand-thumbs-up';
      }
    });
  });
}

/* ==========================================================================
   5. Pre-order / Reservation Modal
   ========================================================================== */
function initPreorderModal() {
  const modal = document.getElementById('preorder-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const openBtns = document.querySelectorAll('.open-order-btn');
  const modelSelect = document.getElementById('order-model');
  const summaryPrice = document.getElementById('summary-price');
  const summaryModel = document.getElementById('summary-model');
  const orderForm = document.getElementById('preorder-form');

  if (!modal) return;

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetModel = btn.getAttribute('data-model') || 'pro';
      if (modelSelect) modelSelect.value = targetModel;
      updateOrderSummary();
      modal.classList.add('active');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  if (modelSelect) {
    modelSelect.addEventListener('change', updateOrderSummary);
  }

  function updateOrderSummary() {
    if (!modelSelect || !summaryPrice || !summaryModel) return;
    if (modelSelect.value === 'essential') {
      summaryModel.textContent = 'Unnoise Essential (รุ่นมาตรฐาน)';
      summaryPrice.textContent = '฿4,990';
    } else if (modelSelect.value === 'travel') {
      summaryModel.textContent = 'Unnoise Travel Compact (รุ่นพกพา)';
      summaryPrice.textContent = '฿3,490';
    } else if (modelSelect.value === 'case') {
      summaryModel.textContent = 'Unnoise Cooling Silk Pillowcase (ปลอกหมอนใยไหม)';
      summaryPrice.textContent = '฿1,290';
    } else {
      summaryModel.textContent = 'Unnoise Pro Sound & Air (รุ่นท็อปพร้อมระบบเสียง)';
      summaryPrice.textContent = '฿7,990';
    }
  }

  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      modal.classList.remove('active');
      showToast('จองสิทธิ์ล่วงหน้าสำเร็จ! ข้อมูลโมเดลถูกบันทึกเรียบร้อย');
    });
  }
}

/* ==========================================================================
   6. Toast & Smooth Scroll & Mobile Menu
   ========================================================================== */
function showToast(message) {
  let toast = document.getElementById('toast-msg');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-msg';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<i class="bi bi-check-circle-fill" style="color: #60A5FA;"></i> ${message}`;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-open');
    const icon = toggleBtn.querySelector('i');
    if (icon) {
      icon.className = navLinks.classList.contains('mobile-open') ? 'bi bi-x-lg' : 'bi bi-list';
    }
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('mobile-open');
      const icon = toggleBtn.querySelector('i');
      if (icon) icon.className = 'bi bi-list';
    });
  });
}

/* ==========================================================================
   7. Shop Catalog Filters
   ========================================================================== */
function initShopFilters() {
  const filterPills = document.querySelectorAll('.filter-pill');
  const productCards = document.querySelectorAll('.product-shop-card');

  if (!filterPills.length || !productCards.length) return;

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filter = pill.getAttribute('data-filter');

      productCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   8. Interactive Pillow Finder Quiz
   ========================================================================== */
const quizQuestions = [
  {
    step: 1,
    title: '1. ท่านอนหลักที่คุณคุ้นเคยที่สุดคือท่าใด?',
    subtitle: 'เพื่อกำหนดระดับความสูงและแนวรองรับกระดูกต้นคอที่ถูกต้องตามหลักสรีรศาสตร์',
    options: [
      { id: 'back', icon: 'bi-person', title: 'นอนหงายเป็นหลัก', desc: 'ต้องการหมอนรองรับความโค้งของกระดูกสันหลังและคอระดับปานกลาง' },
      { id: 'side', icon: 'bi-person-arms-up', title: 'นอนตะแคงข้าง', desc: 'ต้องการหมอนที่สูงพอดีกับความกว้างของไหล่เพื่อไม่ให้คอพับ' },
      { id: 'stomach', icon: 'bi-arrow-down-circle', title: 'นอนคว่ำหน้า', desc: 'ต้องการหมอนที่มีความสูงต่ำพิเศษ เพื่อไม่ให้กล้ามเนื้อคอเกร็ง' },
      { id: 'toss', icon: 'bi-arrow-repeat', title: 'พลิกตัวบ่อยตลอดคืน', desc: 'ต้องการหมอนทรง Ergonomic แบบ Dynamic ที่รองรับทั้งนอนหงายและตะแคง' }
    ]
  },
  {
    step: 2,
    title: '2. ปัญหาการนอนที่คุณต้องการแก้ไขมากที่สุด?',
    subtitle: 'ระบบจะเลือกฟังก์ชันเซนเซอร์และการปรับตัวของหมอนให้ตรงจุด',
    options: [
      { id: 'snore', icon: 'bi-soundwave', title: 'มีอาการนอนกรน / หายใจติดขัด', desc: 'ต้องการระบบตรวจจับเสียงกรนและถุงลมไมโครแอร์แบ็กช่วยเปิดทางเดินหายใจ' },
      { id: 'neck', icon: 'bi-heart-pulse', title: 'ตื่นมาปวดเมื่อยคอ บ่า ไหล่', desc: 'ต้องการเมมโมรี่โฟมความหนาแน่นสูงกระจายแรงกดทับอย่างนุ่มนวล' },
      { id: 'noise', icon: 'bi-volume-up', title: 'หลับยากจากเสียงรบกวนภายนอก', desc: 'ต้องการลำโพงคลื่นกระดูก Bone-Conduction ส่งคลื่นเสียงบำบัดกลบเสียง' },
      { id: 'travel', icon: 'bi-briefcase', title: 'เดินทางบ่อย / ต้องการพกพา', desc: 'ต้องการหมอนขนาดกะทัดรัดที่ม้วนเก็บง่ายและมีเซนเซอร์ติดตาม' }
    ]
  },
  {
    step: 3,
    title: '3. คุณชอบสัมผัสความแน่นและอุณหภูมิแบบไหน?',
    subtitle: 'เลือกสเปกเนื้อสัมผัสและปลอกหมอนที่ตรงใจคุณที่สุด',
    options: [
      { id: 'medium-cool', icon: 'bi-snow', title: 'นุ่มแน่นกำลังดี + เย็นสบาย', desc: 'เมมโมรี่โฟมบาลานซ์ พร้อมผ้าใยไหมผสมเจลเย็นระบายอากาศ' },
      { id: 'soft-wrap', icon: 'bi-cloud', title: 'นุ่มละมุนโอบกระชับ', desc: 'โอบรับศีรษะอย่างอ่อนโยน ผ่อนคลายความตึงเครียดของกล้ามเนื้อ' },
      { id: 'firm-support', icon: 'bi-shield-check', title: 'แน่นกระชับ รองรับคอพิเศษ', desc: 'แกนยางพาราธรรมชาติผสมชาร์โคล รองรับแนวกระดูกสันหลังตรงเป๊ะ' },
      { id: 'compact-light', icon: 'bi-bag', title: 'น้ำหนักเบา พับเก็บเร็ว', desc: 'โฟมความยืดหยุ่นสูงพิเศษ คืนรูปทันทีเมื่อคลี่ออก' }
    ]
  }
];

let quizCurrentStep = 0;
let userAnswers = {};

function initPillowFinderQuiz() {
  const quizContainer = document.getElementById('pillow-quiz-shell');
  if (!quizContainer) return;

  renderQuizStep(quizCurrentStep);
}

function renderQuizStep(stepIndex) {
  const questionBox = document.getElementById('quiz-questions-view');
  const resultBox = document.getElementById('quiz-result-view');
  const progressFill = document.getElementById('quiz-progress-fill');
  const stepIndicator = document.getElementById('quiz-step-indicator');
  const qTitle = document.getElementById('quiz-q-title');
  const qSubtitle = document.getElementById('quiz-q-subtitle');
  const optGrid = document.getElementById('quiz-options-grid');

  if (!questionBox || !resultBox) return;

  if (stepIndex >= quizQuestions.length) {
    // Show Results
    questionBox.style.display = 'none';
    resultBox.classList.add('active');
    if (progressFill) progressFill.style.width = '100%';
    renderQuizResult();
    return;
  }

  questionBox.style.display = 'block';
  resultBox.classList.remove('active');

  const q = quizQuestions[stepIndex];
  if (stepIndicator) stepIndicator.textContent = `ขั้นตอนที่ ${q.step} จาก 3`;
  if (progressFill) progressFill.style.width = `${(q.step / 3) * 100}%`;
  if (qTitle) qTitle.textContent = q.title;
  if (qSubtitle) qSubtitle.textContent = q.subtitle;

  if (optGrid) {
    optGrid.innerHTML = '';
    q.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'quiz-opt-btn';
      btn.innerHTML = `
        <div class="quiz-opt-icon"><i class="bi ${opt.icon}"></i></div>
        <div>
          <div class="quiz-opt-title">${opt.title}</div>
          <div class="quiz-opt-desc">${opt.desc}</div>
        </div>
      `;
      btn.addEventListener('click', () => {
        userAnswers[q.step] = opt.id;
        quizCurrentStep++;
        renderQuizStep(quizCurrentStep);
      });
      optGrid.appendChild(btn);
    });
  }
}

function renderQuizResult() {
  const resultImg = document.getElementById('res-rec-img');
  const resultName = document.getElementById('res-rec-name');
  const resultSpecs = document.getElementById('res-rec-specs');
  const resultPrice = document.getElementById('res-rec-price');
  const resultMatch = document.getElementById('res-match-num');
  const resultCta = document.getElementById('res-cta-btn');
  const resetBtn = document.getElementById('res-reset-btn');

  const disruption = userAnswers[2];
  const posture = userAnswers[1];
  const feel = userAnswers[3];

  let rec = {
    name: 'Unnoise Smart Sleep Pillow with App Hub',
    img: 'assets/img/unnoise_app_pillow.png',
    modelKey: 'pro',
    price: '฿7,990',
    match: '98%',
    specs: 'แนะนำสเปก: ระดับความสูง 11 ซม. ความแน่น Medium-Firm พร้อมระบบถุงลมแก้กรนอัตโนมัติ และลำโพง Bone Conduction สำหรับเสียง Pink Noise'
  };

  if (disruption === 'travel' || feel === 'compact-light') {
    rec = {
      name: 'Unnoise Travel Compact',
      img: 'assets/img/unnoise_travel.jpg',
      modelKey: 'travel',
      price: '฿3,490',
      match: '96%',
      specs: 'แนะนำสเปก: หมอนพกพาม้วนเก็บได้ รองรับคอขณะเดินทาง เซนเซอร์วัดการนอนไร้สาย ชาร์จ 1 ครั้งใช้ได้ 20 วัน'
    };
  } else if (disruption === 'neck' || feel === 'firm-support' || feel === 'custom-layers') {
    rec = {
      name: 'Unnoise Modular Multi-Layer Pillow',
      img: 'assets/img/unnoise_layers.png',
      modelKey: 'essential',
      price: '฿4,990',
      match: '96%',
      specs: 'แนะนำสเปก: โครงสร้าง 4 ชั้นปรับระดับความหนาได้ตามต้องการ ลดอาการปวดคอบ่าไหล่ พร้อมเซนเซอร์วัดการนอนหลับ BCG ไร้สาย'
    };
  }

  if (resultImg) resultImg.src = rec.img;
  if (resultName) resultName.textContent = rec.name;
  if (resultSpecs) resultSpecs.textContent = rec.specs;
  if (resultPrice) resultPrice.textContent = rec.price;
  if (resultMatch) resultMatch.textContent = rec.match;

  if (resultCta) {
    resultCta.onclick = (e) => {
      e.preventDefault();
      const modal = document.getElementById('preorder-modal');
      const modelSelect = document.getElementById('order-model');
      if (modelSelect) modelSelect.value = rec.modelKey;
      const summaryPrice = document.getElementById('summary-price');
      const summaryModel = document.getElementById('summary-model');
      if (summaryModel) summaryModel.textContent = rec.name;
      if (summaryPrice) summaryPrice.textContent = rec.price;
      if (modal) modal.classList.add('active');
    };
  }

  if (resetBtn) {
    resetBtn.onclick = () => {
      quizCurrentStep = 0;
      userAnswers = {};
      renderQuizStep(0);
    };
  }
}
