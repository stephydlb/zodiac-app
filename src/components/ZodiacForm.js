  import React, { useState } from 'react';
  import { 
    Container, 
    Paper, 
    Select, 
    MenuItem, 
    TextField, 
    Button, 
    Typography, 
    Box, 
    LinearProgress,
    Dialog, 
    DialogContent, 
    DialogTitle,
    Zoom
  } from '@mui/material';

  import { useDispatch } from 'react-redux';
  import { setSign } from '../store';

  const ZodiacForm = () => {
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [sign, setLocalSign] = useState('');
    const [secondSign, setSecondSign] = useState('');
    const [compatibility, setCompatibility] = useState(0);
    const [showProgress, setShowProgress] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const dispatch = useDispatch();

    const compatibilityData = {
      'Bélier': {
        'Bélier': 75,
        'Taureau': 60,
        'Gémeaux': 85,
        'Cancer': 65,
        'Lion': 90,
        'Vierge': 55,
        'Balance': 70,
        'Scorpion': 80,
        'Sagittaire': 95,
        'Capricorne': 50,
        'Verseau': 85,
        'Poissons': 65
      },
      'Taureau': {
        'Bélier': 60,
        'Taureau': 90,
        'Gémeaux': 55,
        'Cancer': 95,
        'Lion': 70,
        'Vierge': 95,
        'Balance': 75,
        'Scorpion': 85,
        'Sagittaire': 50,
        'Capricorne': 95,
        'Verseau': 45,
        'Poissons': 85
      },
      'Gémeaux': {
        'Bélier': 85,
        'Taureau': 55,
        'Gémeaux': 85,
        'Cancer': 65,
        'Lion': 90,
        'Vierge': 75,
        'Balance': 95,
        'Scorpion': 60,
        'Sagittaire': 85,
        'Capricorne': 50,
        'Verseau': 95,
        'Poissons': 70
      },
      'Cancer': {
        'Bélier': 65,
        'Taureau': 95,
        'Gémeaux': 65,
        'Cancer': 90,
        'Lion': 65,
        'Vierge': 85,
        'Balance': 70,
        'Scorpion': 95,
        'Sagittaire': 55,
        'Capricorne': 80,
        'Verseau': 50,
        'Poissons': 95
      },
      'Lion': {
        'Bélier': 90,
        'Taureau': 70,
        'Gémeaux': 90,
        'Cancer': 65,
        'Lion': 95,
        'Vierge': 60,
        'Balance': 85,
        'Scorpion': 75,
        'Sagittaire': 95,
        'Capricorne': 45,
        'Verseau': 80,
        'Poissons': 65
      },
      'Vierge': {
        'Bélier': 55,
        'Taureau': 95,
        'Gémeaux': 75,
        'Cancer': 85,
        'Lion': 60,
        'Vierge': 90,
        'Balance': 75,
        'Scorpion': 95,
        'Sagittaire': 55,
        'Capricorne': 95,
        'Verseau': 65,
        'Poissons': 85
      },
      'Balance': {
        'Bélier': 70,
        'Taureau': 75,
        'Gémeaux': 95,
        'Cancer': 70,
        'Lion': 85,
        'Vierge': 75,
        'Balance': 90,
        'Scorpion': 80,
        'Sagittaire': 85,
        'Capricorne': 70,
        'Verseau': 95,
        'Poissons': 75
      },
      'Scorpion': {
        'Bélier': 80,
        'Taureau': 85,
        'Gémeaux': 60,
        'Cancer': 95,
        'Lion': 75,
        'Vierge': 95,
        'Balance': 80,
        'Scorpion': 90,
        'Sagittaire': 65,
        'Capricorne': 85,
        'Verseau': 60,
        'Poissons': 95
      },
      'Sagittaire': {
        'Bélier': 95,
        'Taureau': 50,
        'Gémeaux': 85,
        'Cancer': 55,
        'Lion': 95,
        'Vierge': 55,
        'Balance': 85,
        'Scorpion': 65,
        'Sagittaire': 90,
        'Capricorne': 65,
        'Verseau': 85,
        'Poissons': 60
      },
      'Capricorne': {
        'Bélier': 50,
        'Taureau': 95,
        'Gémeaux': 50,
        'Cancer': 80,
        'Lion': 45,
        'Vierge': 95,
        'Balance': 70,
        'Scorpion': 85,
        'Sagittaire': 65,
        'Capricorne': 90,
        'Verseau': 70,
        'Poissons': 85
      },
      'Verseau': {
        'Bélier': 85,
        'Taureau': 45,
        'Gémeaux': 95,
        'Cancer': 50,
        'Lion': 80,
        'Vierge': 65,
        'Balance': 95,
        'Scorpion': 60,
        'Sagittaire': 85,
        'Capricorne': 70,
        'Verseau': 90,
        'Poissons': 75
      },
      'Poissons': {
        'Bélier': 65,
        'Taureau': 85,
        'Gémeaux': 70,
        'Cancer': 95,
        'Lion': 65,
        'Vierge': 85,
        'Balance': 75,
        'Scorpion': 95,
        'Sagittaire': 60,
        'Capricorne': 85,
        'Verseau': 75,
        'Poissons': 90
      }
    };

    const getZodiacSign = (month, day) => {
      const dates = {
        'Capricorn': [12, 22, 1, 19],
        'Aquarius': [1, 20, 2, 18],
        'Pisces': [2, 19, 3, 20],
        'Aries': [3, 21, 4, 19],
        'Taurus': [4, 20, 5, 20],
        'Gemini': [5, 21, 6, 20],
        'Cancer': [6, 21, 7, 22],
        'Leo': [7, 23, 8, 22],
        'Virgo': [8, 23, 9, 22],
        'Libra': [9, 23, 10, 22],
        'Scorpio': [10, 23, 11, 21],
        'Sagittarius': [11, 22, 12, 21]
      };

      month = parseInt(month);
      day = parseInt(day);

      for (let sign in dates) {
        const [startMonth, startDay, endMonth, endDay] = dates[sign];
        if (
          (month === startMonth && day >= startDay) ||
          (month === endMonth && day <= endDay)
        ) {
          return sign;
        }
      }
      return 'Capricorn'; // Default for December 22-31
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const calculatedSign = getZodiacSign(month, day);
      setLocalSign(calculatedSign);
      dispatch(setSign(calculatedSign));
    };

    const handleReset = () => {
      setMonth('');
      setDay('');
      setLocalSign('');
      setSecondSign('');
      setCompatibility(0);
      setShowProgress(false);
      dispatch(setSign(null));
    };

    const getCompatibilityMessage = (score) => {
      if (score >= 80) return "Une Compatibilité Exceptionnelle ! ✨";
      if (score >= 60) return "Une Belle Harmonie ! 💫";
      if (score >= 40) return "Ça Pourrait Fonctionner ! 🤔";
      return "Un Défi Intéressant ! 💭";
    };

    const animateCompatibility = (finalValue) => {
      setShowProgress(true);
      let currentValue = 0;
      const interval = setInterval(() => {
        if (currentValue >= finalValue) {
          clearInterval(interval);
          setOpenDialog(true);
          return;
        }
        currentValue += 1;
        setCompatibility(currentValue);
      }, 20);
    };

    const checkCompatibility = () => {
      const compatibilityScore = Math.floor(Math.random() * 100);
      animateCompatibility(compatibilityScore);
    };

    return (
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            Découvrez Votre Signe Astrologique
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <Select
              fullWidth
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              sx={{ mb: 2 }}
            >
              {Array.from({ length: 12 }, (_, i) => (
                <MenuItem key={i + 1} value={i + 1}>
                  {new Date(2000, i).toLocaleString('default', { month: 'long' })}
                </MenuItem>
              ))}
            </Select>
            <TextField
              fullWidth
              type="number"
              label="Day"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              InputProps={{ inputProps: { min: 1, max: 31 } }}
              sx={{ mb: 2 }}
            />
            <Button 
              fullWidth 
              variant="contained" 
              type="submit"
              size="large"
              sx={{ mb: 2 }}
            >
              Find My Sign
            </Button>
            {sign && (
              <Button
                fullWidth
                variant="outlined"
                onClick={handleReset}
                size="large"
              >
                Calculate Another Sign
              </Button>
            )}
          </Box>
          {sign && (
            <Box sx={{ mt: 3 }}>
              <Typography variant="h5" color="primary" align="center" gutterBottom>
                Your Zodiac Sign is: {sign}
              </Typography>
              <Typography variant="h6" gutterBottom>
                Vérifier la Compatibilité
              </Typography>
              <Select
                fullWidth
                value={secondSign}
                onChange={(e) => setSecondSign(e.target.value)}
                sx={{ mb: 2 }}
              >
                {Object.keys(compatibilityData).map((zodiacSign) => (
                  <MenuItem key={zodiacSign} value={zodiacSign}>
                    {zodiacSign}
                  </MenuItem>
                ))}
              </Select>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                onClick={checkCompatibility}
                disabled={!secondSign}
                sx={{ mb: 2 }}
              >
                Vérifier la Compatibilité
              </Button>
          
              {showProgress && (
                <Box sx={{ width: '100%', mt: 2 }}>
                  <Typography variant="body1" gutterBottom>
                    Compatibility Score:
                  </Typography>
                  <LinearProgress 
                    variant="determinate" 
                    value={compatibility} 
                    sx={{
                      height: 10,
                      borderRadius: 5,
                      backgroundColor: '#e0e0e0',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: `hsl(${compatibility * 1.2}, 80%, 50%)`
                      }
                    }}
                  />
                  <Typography 
                    variant="h4" 
                    align="center" 
                    sx={{ mt: 2, color: `hsl(${compatibility * 1.2}, 80%, 50%)` }}
                  >
                    {compatibility}%
                  </Typography>
                </Box>
              )}
            </Box>
          )}
        </Paper>

        <Dialog 
          open={openDialog} 
          onClose={() => setOpenDialog(false)}
          TransitionComponent={Zoom}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle sx={{ textAlign: 'center', bgcolor: 'primary.main', color: 'white' }}>
            Résultat de Compatibilité
          </DialogTitle>
          <DialogContent sx={{ 
            p: 4, 
            textAlign: 'center',
            background: `linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)`
          }}>
            <Typography variant="h2" sx={{ 
              color: 'white',
              fontWeight: 'bold',
              mb: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}>
              {compatibility}%
            </Typography>
            <Typography variant="h5" sx={{ color: 'white', mb: 2 }}>
              {getCompatibilityMessage(compatibility)}
            </Typography>
            <Typography variant="h6" sx={{ color: 'white' }}>
              {sign} + {secondSign}
            </Typography>
          </DialogContent>
        </Dialog>
      </Container>
    );
  };  export default ZodiacForm;